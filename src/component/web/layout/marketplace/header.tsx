"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  
  const [typeDropDownActive, setTypeDropDownActive] = useState(false);
  return (
    <header className="border-b w-full bg-black text-white px-40 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-bold hover:opacity-80 transition-opacity "
      >
        BrokenPixels
      </Link>
      <nav className="flex gap-8">
        <Link href="/artists">Artists</Link>
        <div onClick={()=> setTypeDropDownActive((curr) => !curr)} className="relative cursor-pointer">Type</div>
        {typeDropDownActive && ( 
          <div className="absolute top-12 right-[16%] bg-background p-3 border rounded-md">
            <p className="hover:text-black hover:bg-white p-2">2d</p>
            <p className="hover:text-black hover:bg-white p-2">3d</p>
            <p className="hover:text-black hover:bg-white p-2">populiar</p>
            <p></p>
          </div>
        )}
        <div ><input type="text" className="border rounded-md px-3" /></div>
      </nav>
    </header>
  );
}
