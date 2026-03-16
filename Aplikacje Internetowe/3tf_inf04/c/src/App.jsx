import { useState, useEffect, useEffectEvent } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [message, setMessage] = useState("wartość początkowa stanu")
  useEffect(()=>{
    fetch("http://localhost:3333/server2")
  }, [])
  
  return (
    <>
    <h1 style={{color:'red'}}>{message}</h1>
    </>
  )
}

export default App
