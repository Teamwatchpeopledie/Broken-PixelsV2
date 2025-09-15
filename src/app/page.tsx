"use client"
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col space-y-4 p-6 bg-gray-100 rounded-lg shadow-md w-64">
      <Link 
        href='/3d'
        className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        3D Graphics
      </Link>
      <Link 
        href='/games'
        className="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Games
      </Link>
      <Link 
        href='/manga'
        className="block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
      >
        Read Manga
      </Link>
    </div>
  );
}
