import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter, setCounter] = useState(15)
  
//let counter =10
let addValue = () => {
  if (counter<20){
  
  setCounter(counter+1)
  }

}
let dec=()=>{
  if (counter>0){
  setCounter(counter-1)
}}
  return (
    <>
    <h1>Hi this is jaid</h1>

    <h2>Counter button: {counter}</h2>
  <br />

  <button
  onClick={addValue}
  >Add value:{counter}</button>
  <br />
  <button
  onClick={dec}
  >Dec value:{counter}</button>
  <br />
  <footer>extrea: {counter}</footer>
  </>
    )

}

export default App
