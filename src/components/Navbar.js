"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() { 
    const [isMenuOpen, setIsMenuOpen] =useState(false);

    const toggleMenu = () => {
        setIsMenuOpen( ! isMenuOpen);
    };
 return (
 <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur">
 <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
 <h1 className="text-xl font-serif">PenPixel</h1>
 <ul className="hidden md:flex gap-8 text-sm">
  <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2">
       <Link href="/">Home </Link>
        </li>
 <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2"> 
    <Link href="/explore">Explore</Link>
    </li>
 <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2">
    <Link href="#Service">Services</Link>
    </li>
 <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2">
    <Link href="#Contact">Contact</Link>
    </li> 
 </ul> 
 <button onClick={toggleMenu} className="md:hidden">
    {isMenuOpen ? (
         <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                </svg>
                 ) : (
                 <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"/>
                </svg> 
    )}
 </button>
 </div>
{isMenuOpen && (
   <div className="md:hidden p-6 text-black bg-white">
    <ul className="flex flex-col space-y-2">
       <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2">
       <Link href="/">Home </Link>
        </li>
 <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2"> 
    <Link href="/explore">Explore</Link>
    </li>
 <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2">
    <Link href="#Service">Services</Link>
    </li>
 <li className="hover:underline hover:text-amber-500 hover:decoration-amber-500 hover:decoration-2">
    <Link href="#Contact">Contact</Link>
    </li> 
    </ul>
     </div> 
)}
 </nav>
 ) 
}