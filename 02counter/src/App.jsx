import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hook kyu use krte h

  const [counter, setCounter] = useState(15)

  
  //let counter = 5
  const addValue = () =>{
    // counter = counter +1
    // setCounter(counter)
    //if(counter<=19){setCounter(counter+1)}

      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      setCounter( (prevCounter) => prevCounter+1)
      setCounter( (prevCounter) => prevCounter+1)
      setCounter( (prevCounter) => prevCounter+1)
      setCounter( (prevCounter) => prevCounter+1)


  }

  const removeValue = ()=>{
    //if(counter>=1)
      setCounter(counter-1)
  }
 

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
