import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  

  const addValue = () => {
    //counter = counter + 1

    // it only returns or adds one time ie. 15+1=16 not adds 4 times
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

    // it returns or adds 4 times 1 in 15 ------------ for better understanding un-comment it and run to see
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    if(counter == 0){
      alert("Sorry You reached at Zero")
    }
    else{
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add value {counter}</button> 
      <br />
      <button onClick={removeValue}> remove value {counter}</button>
      
    </>
  )
}

export default App