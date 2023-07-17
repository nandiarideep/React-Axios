import React from 'react'
import Products from '../src/pages/Products'


const App = () => {
  return (
    <div className='font-abc'>
      <h1 className='text-[60px] flex justify-center'>A-X-I-O-S</h1>
      <div className='grid grid-cols-3 gap-4 p-2 min-h-3 min-w-5'>
        <Products />
      </div>
    </div>
    
  )
}

export default App
