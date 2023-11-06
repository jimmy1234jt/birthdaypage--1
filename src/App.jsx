import { useState } from 'react'
import './App.css'
import BackgroundImage from './Components/BackgroundImage'
import logo from "./assets/army-purple.jpg"
// import { Typewriter } from "react-simple-typewriter"
import { TypeAnimation } from 'react-type-animation';
import Confetti from './Components/Confetti';




function App() {

  const [isSwitch, setIsSwitch] = useState(true)

  const toggle = () => {
    setIsSwitch(!isSwitch)
  }

  return (
    <div className='app'>
      <Confetti />
      <BackgroundImage  />
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
    <div className='content'>
      {/* <div className='text'>
        <div className='header'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .pauseFor(5000)
              .typeString(" Happy Birthday to  My Princess ")
              .start()
            }}
          />
        </div>
        <div className='paragraph'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .pauseFor(5000)
            .typeString(" Happy Birthday to  My Princess ")
            .start()
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .pauseFor(5000)
            .typeString(" Happy Birthday to  My Princess ")
            .start()
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .pauseFor(5000)
            .typeString(" Happy Birthday to  My Princess ")
            .start()
          }}
        />
      </div>
      </div> */}
      {/* <h1>
        <Typewriter 
          pausefor={5000}
          words={["Happy birthday princess"]}
          typeSpeed={70}
        />
      </h1> */}
      <div className='wrapper'>
        <TypeAnimation  className='text'
          style={{ whiteSpace: 'pre-line', display: 'block' }}
          sequence={[
            'To my special Sagittarius Princess ♐♐♐👸👸',
            4000,
            'This is just your early birthday gift💐🌹💐',
            4000,
            'and maybe your little distraction when you miss me 🥰🥰🥰',
            4000,
            'It is small but i hope you like it.😁',
            4000,
            `Happy Birthday In Advance Mami🥳🥳\n
            I thank God for bringing you into this world but i kinda wish it was the same year\n
            I dating a cute and sexy girl so i am not complaining😏😏😏\n
            You mean alot so don't forget \n
            enjoy your month`,
            10000,
            '',
            `I\n
            WOVE\n
            YOU\n
            💜💜💜💜`,
          ]}
          speed={75}
          deletionSpeed={90}
        />
      </div>

      <button onClick={toggle}>
        Go back 
      </button>
    </div>
  )
}

export default App
