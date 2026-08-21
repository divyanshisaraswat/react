import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed)  str+='0123456789'
    if(characterAllowed)  str+='!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordTOClipboard = useCallback(() => {
    passwordRef.current?.select()
    //if selecting a range
    // passwordRef.current?.setSelectionRange(0, 99999)
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, characterAllowed, generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md mt-10 rounded-lg text-orange-500 p-4 my-8 bg-gray-800 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden w-full bg-white'>
        <input
         type="text"
         value={password}
         className="w-full outline-none py-1 px-3 box-border"
         placeholder="Password "
         readOnly 
         ref={passwordRef}
         />
         <button 
           onClick={copyPasswordTOClipboard}
           className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer'>
           copy
         </button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
              type="range"
              min={8}
              max={80}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
            <label>Length: {length}</label>
        </div>
          <div className='flex items-center gap-x-2'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberinput"
              onChange={(e) => setNumberAllowed(prev => !prev)}
              />
            <label>Numbers</label>
          <div className='flex items-center gap-x-2'>
            <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterinput"
              onChange={(e) => setCharacterAllowed(prev => !prev)}
              />
            <label>Characters</label>
          </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default App
