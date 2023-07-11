
import './App.css'
import header from './assets/img/Header.jpg'
import RyM from './components/RyM'

function App() {
    return(
        <div className='App'>
            <header>
                <img src={header} alt="" />
            </header>
            <RyM/>
            <footer>
            </footer>
        </div>
    )
}

export default App