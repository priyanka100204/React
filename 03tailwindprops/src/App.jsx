import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj={
    username: "Priyanka",
    age: 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-2'>Tailwind Test</h1>
      <Card channel="chaiaurcode" username="priyanka" btntext="click me"/>
      <Card username="hitesh"/>
      
      
    </>
  )
}

export default App
