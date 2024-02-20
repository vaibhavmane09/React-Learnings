import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")  // genarate a random password

  // useRef Hook
  const passwordRef = useRef(null)

  // useCallback Hook
const passwordGenarator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]"

    // generate the random number
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)  
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

// copy method 
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();  // optimiztion - this line is used to select the copied text in input field
  passwordRef.current?.setSelectionRange(0,12)  // used to select a perticular ramge of the text from input field
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordGenarator()
}, [length, numAllowed, charAllowed, passwordGenarator])


  return (
    <>
      <div className='w-full max-w-lg  mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500  text-orange-700'>
      <h1 className='text-4xl text-center my-3 text-black'>Password Generator</h1>
      <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
        <input type="text" value={password} className='outline-none w-full py-4 px-3' placeholder='Password' readOnly ref={passwordRef}/>
        <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white py-0.5 px-4 shrink-0' 
          >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range" min={6} max={100}   value={length} className='cursor-pointer' 
            onChange={(e) => {setLength(e.target.value)}}/>
          <label className='text-black-900 text-lg'> Length-{length}</label>
        </div>

        {/* Number Add */}
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={() => {setNumAllowed((prev) => (!prev));}} />
          <label className='text-black-900 text-lg'> Number</label>
        </div>

        {/* Characters add */}
        <div className='flex item-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {setCharAllowed((prev) => (!prev));}} />
          <label className='text-black-900 text-lg'> Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
