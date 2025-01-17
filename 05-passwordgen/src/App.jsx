import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')
  const passwordref = useRef(null)

  const genratePasword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
    document.querySelector('.buttonclass').innerHTML = 'Copy'
  }, [length,numberAllowed, charAllowed])

  useEffect(()=>{
    genratePasword()
  },[length, numberAllowed, charAllowed])


  const copyPassword = () =>{
    window.navigator.clipboard.writeText(password)
    document.querySelector('.buttonclass').innerHTML = 'Copied'
    passwordref.current?.select()
  }
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly 
          ref={passwordref}/>
          <button onClick={copyPassword} className='buttonclass outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setlength(e.target.value)}
            name=''
            id=''/>
            <label htmlFor='length'>Length</label>
            <label htmlFor='length'>({length})</label>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} 
              onChange={()=> {
                setnumberAllowed((prev)=> !prev)
              }}/>
              <label htmlFor="Number">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} 
              onChange={()=> {
                setcharAllowed((prev)=> !prev)
              }}/>
              <label htmlFor="CharInput">Charecters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
