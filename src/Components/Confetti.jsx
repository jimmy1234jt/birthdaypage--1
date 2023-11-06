import {useEffect, useState} from 'react'
import ReactConfetti from "react-confetti"

function Confetti() {
    const [windowDimenson, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight})

    const detectSize = () => {
        setWindowDimension({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
        window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenson])

  return (
    <>
        <ReactConfetti 
            width={windowDimenson.width}
            height={windowDimenson.height}
            tweenDuration={1000}
        />
    </>
  )
}

export default Confetti