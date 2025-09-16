import React from "react";
import { FaYoutube, FaDiscord, FaKickstarter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-8 py-6 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BrokenPixels. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="https://kick.com/brokenpixels"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-400 hover:scale-110 transition-all duration-200"
          >
            <FaKickstarter /> Kick
          </a>
          <a
            href="https://discord.gg/XE8T7z4wN2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-400 hover:scale-110 transition-all duration-200"
          >
            <FaDiscord /> Discord
          </a>
          <a
            href="https://www.youtube.com/@BrokenPixels-v6d6e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-400 hover:scale-110 transition-all duration-200"
          >
            <FaYoutube /> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
