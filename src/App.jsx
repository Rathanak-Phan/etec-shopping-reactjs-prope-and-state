import { useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const Favorite = () => {
    setLike(!like);
    console.log(like);
  }

  function Increment() {
    setCount(count + 1);
  }

  return (
    <>
    <div className='bg-blue-900 h-20 flex justify-center text-gray-50'>
      <Header username="pengleng" email="pengleng"/>
    </div>

      <div className='w-screen h-screen flex flex-col gap-10 items-center'>
        <div className='flex items-center gap-5 mt-20'>
          <button
              onClick={() => {setCount(count - 1)}}
              className='px-5 py-2 bg-green-600 rounded-md text-xl text-gray-50'> - </button>

          <p>{count}</p>

          <button
            onClick={Increment}
            className='px-5 py-2 bg-green-600 rounded-md text-xl text-gray-50'> + </button>
        </div>

        <div>
          {like ? 
            <i onClick={Favorite} className="fa-solid fa-heart"></i> 
            : <i onClick={Favorite} className="fa-regular fa-heart"></i>
          }
        </div>

        {/* Cart */}
        
      </div>
    </>
  )
}

export default App
