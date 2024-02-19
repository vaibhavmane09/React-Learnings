import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1 className='bg-green-400 p-4 rounded-xl mb-5'>Hello Vaibhav</h1>
      <Card username="Vaibhav" btnText='Click to Know more'/>
      <Card username="Coding"/>
    </>
  )
}

export default App
