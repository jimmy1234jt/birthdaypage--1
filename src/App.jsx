import { useState } from 'react'
import './App.css'
import BackgroundImage from './Components/BackgroundImage'
import logo from "./assets/army-purple.jpg"


function App() {

  const [isSwitch, setIsSwitch] = useState(true)

  const toggle = () => {
    setIsSwitch(!isSwitch)
  }

  return (
    <div className='app'>
      <BackgroundImage />
      <div className='container'>
        {isSwitch ? (
          <Logo toggle={toggle} />
        ):(
          <Content toggle={toggle} />
        )}
      </div>
    </div>
  )
}

const divStyle = {
  backgroundImage: `url(${logo})`,
}
function Logo ({ toggle }) {
  return (
    <div className='Bts-logo' style={divStyle}>
      <button onClick={toggle}>
        Click Here
      </button>
    </div>
  )
}

function Content ({ toggle }) {
  return(
    <div>
      <h1>
        Happy Birthday
      </h1>
      <button onClick={toggle}>
        Go back 
      </button>
    </div>
  )
}

export default App
