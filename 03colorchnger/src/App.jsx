import { useState } from 'react';
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')
  
 /* function funtioncolor(color){
    setcolor(color)
  }*/

  return (
    <>
      <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor: color}}>
        {/* Fixed div at the bottom */}
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setcolor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={() => setcolor('green')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={() => setcolor('black')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: 'black'}}>Black</button>
            <button onClick={() => setcolor('blue')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setcolor('yellow')}  className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: 'yellow'}}>yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
