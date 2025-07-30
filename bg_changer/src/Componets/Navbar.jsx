import React, { useState } from 'react'

const Navbar = () => {
    const[color, setColor]=useState("color")

  return (
    <div className='w-full h-screen duration-250' style={{backgroundColor: color}}>
        <div className='bg-white border-2 flex p-4 rounded-2xl w-130 absolute top-120 left-120'>
            <button onClick={()=>setColor("blue")} className='list-none border-2 p-4 rounded-2xl mr-4 text-xl text-blue-950' style={{backgroundColor: "blue"}}>Blue</button>
            <button  onClick={()=>setColor("green")}className='list-none border-2 p-4 rounded-2xl mr-4 text-xl text-green-950' style={{backgroundColor: "green"}}>Green</button>
            <button  onClick={()=>setColor("black")}className='list-none  border-2 p-4 rounded-2xl mr-4 text-xl text-white' style={{backgroundColor: "black"}}>Black</button>
            <button  onClick={()=>setColor("pink")}className='list-none border-2 p-4 rounded-2xl mr-4 text-xl text-pink-500' style={{backgroundColor: "pink"}}>Pink</button>
            <button  onClick={()=>setColor("yellow")}className='list-none border-2 p-4 rounded-2xl mr-4 text-xl text-yellow-800' style={{backgroundColor: "yellow"}}>Yellow</button>
        </div>
    </div>
  )
}

export default Navbar