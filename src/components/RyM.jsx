import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Location from './Location'
import Residents from './Residents';

const RyM = () => {

  const [rickLocation, setRickLocation] = useState({})

  useEffect(() => {
    let Location = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${Location}`)
      .then(res => setRickLocation(res.data))
  }, [])

  const [searchLoc, setSearchLoc] = useState("")

  const search = () => {
    if(searchLoc <= 126){
      axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
      .then(res => setRickLocation(res.data))
      setSearchLoc("")
    }else {
      alert("Entrada no valida")
      setSearchLoc("")
    }
  }
  
  return(
    <div>
      <input type="number" min={1} max={126} value={searchLoc} onChange={(e) => setSearchLoc(e.target.value)}/>
      <button className='search' onClick={search}>Buscar</button>
      <Location rick={rickLocation}/>
      {rickLocation.residents?.map((rick)=>( <Residents url={rick} key={rick}/> ))}
      
    </div>
  );
};

export default RyM