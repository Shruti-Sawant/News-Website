import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Navbar />
      <div className='cards' style={{ display: "flex", flexWrap: "wrap" }}>
        <Outlet />
      </div>
    </>
  )
}

export default App
