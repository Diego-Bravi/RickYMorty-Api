import React from 'react'

const Location = ({rick}) => {
    return(
        <div className='card_location'>
            <h1>{rick.name}</h1>
            <div className='card_details'>
            <p><strong className="gris">Tipo: <br /></strong>{rick.type}</p>
            <p><strong className="gris">Dimension: <br /></strong>{rick.dimension}</p>
            <p><strong className="gris">Residentes: <br /></strong>{rick.residents?.length}</p>
            </div>
            
        </div>
    );
};

export default Location