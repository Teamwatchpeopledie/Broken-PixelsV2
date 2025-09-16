import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="border-b w-full bg-black text-white px-40 py-4 flex items-center justify-between">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="text-xl font-bold hover:opacity-80 transition-opacity "
      >
        BrokenPixels
      </Link>

      {/* Nav Links */}
      <nav className="flex gap-8">
        {/* Library Dropdown */}
        <div className="relative group">
          <div className="cursor-pointer hover:text-gray-400 transition-colors">
            Library
          </div>
          <div className="absolute left-0 mt-2 hidden w-40 flex-col bg-black border border-gray-700 group-hover:flex">
            <Link
              href="/library/all"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              All
            </Link>
            <Link
              href="/library/favorites"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              Favorites
            </Link>
          </div>
        </div>

        {/* Genre Dropdown */}
        <div className="relative group">
          <div className="cursor-pointer hover:text-gray-400 transition-colors">
            Genre
          </div>
          <div className="absolute left-0 mt-2 hidden w-40 flex-col bg-black border border-gray-700 group-hover:flex">
            <Link
              href="/genre/action"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              Action
            </Link>
            <Link
              href="/genre/adventure"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              Adventure
            </Link>
            <Link
              href="/genre/comedy"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              Comedy
            </Link>
          </div>
        </div>
        <div className="relative group">
          <div className="cursor-pointer hover:text-gray-400 transition-colors">
            Artists
          </div>
          <div className="absolute left-0 mt-2 hidden w-40 flex-col bg-black border border-gray-700 group-hover:flex">
            <Link
              href="/artists/top"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              Top Artists
            </Link>
            <Link
              href="/artists/new"
              className="px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              New Artists
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
