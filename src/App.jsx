import { useState } from 'react'
import './App.css'
import ProductCard from './components/product_cart'
import Header from './components/header'


function App() {


  return (
    <> 
    <div className="w-full flex flex-col h-screen bg-pink-300">
    <div className='w-[500px] flex flex-col  items-center h-[500px] bg-gray-300 relative' >
      <div className="w-[90px] h-[90px] bg-blue-500 fixed right-[50px] bottom-[50px]"></div>  
      <div className="w-[90px] h-[90px] bg-yellow-500"></div> 
      <div className="w-[90px] h-[90px] bg-green-500"></div> 
      <div className="w-[90px] h-[90px] bg-red-500 absolute right-[50px] bottom-[50px]"></div> 
    </div>  
    </div>
         
       
    </>
  )
}

export default App
