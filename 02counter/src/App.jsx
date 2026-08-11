import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

  const addvalue = () => {
    setCounter(counter + 1)
  }

  const removevalue = () => {
     setCounter(counter - 1)
  }

  return (
    <>
      <h1>divya</h1>   
      <h2>counter value :{counter}</h2>

      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button 
      onClick={removevalue}
      >remove value</button>
    </>
  )
}

export default App
