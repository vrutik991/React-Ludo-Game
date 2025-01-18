import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [moves,setMoves] = useState({blue:0,yellow:0,red:0,green:0});

  function updateBlue(){
    setMoves((prevMoves)=>
    {
      return {...prevMoves, blue: prevMoves.blue + 1} // object is returned
    });
  }
  function updateGreen(){
    setMoves((prevMoves)=>
    {
      return {...prevMoves, green: prevMoves.green + 1} // object is returned
    });
  }
  function updateYellow(){
    setMoves((prevMoves)=>
    {
      return {...prevMoves, yellow: prevMoves.yellow + 1} // object is returned
    });
  }
  function updateRed(){
    setMoves((prevMoves)=>
    {
      return {...prevMoves, red: prevMoves.red + 1} // object is returned
    });
  }
  return (
    <>
      <h1>Ludo game begins!</h1>
      <h3 >Blue moves = {moves.blue}</h3>
      <button onClick={updateBlue}>+1</button>
      <h3>Yellow moves = {moves.yellow}</h3>
      <button onClick={updateYellow}>+1</button>
      <h3>Red moves = {moves.red}</h3>
      <button onClick={updateRed}>+1</button>
      <h3>Green moves = {moves.green}</h3>
      <button onClick={updateGreen}>+1</button>
    </>
  )
}

export default App
