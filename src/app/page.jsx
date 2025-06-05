'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [textEntered,setTextEntered] = useState("")
  //  let counter = 0
   
  return (
    <div className="bg-amber-600 h-screen flex items-center justify-center flex-col">
      
      <form >
        <input value={textEntered} type="text" onChange={(e)=>setTextEntered(e.target.value)}  placeholder="enter a value..." className="bg-white px-3 py-3" />
      </form>
      <h1 className="text-white font-bold text-4xl">Entered Text : {textEntered} </h1>
      
      
      <h1 className="text-white font-bold text-9xl">{counter} </h1>
       <div className="flex gap-5">
      <button onClick={()=>setCounter(counter+1)} className="bg-green-600 py-2 px-5 text-white mt-3"> + increment </button>
      <button onClick={()=>counter > 0 && setCounter(counter-1)} className="bg-red-600 py-2 px-5 text-white mt-3"> - decrement</button>
      </div>
      <button onClick={()=>setCounter(0)} className="bg-red-600 py-2 px-5 text-white mt-3"> reset</button>
       <Link href={"/contact"} className="bg-violet-800 py-2 px-5 text-white mt-3">Go to contact</Link>
    </div>
  );
}
