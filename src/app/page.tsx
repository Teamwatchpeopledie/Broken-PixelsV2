import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center gap-6 bg-background text-white">
      {[
        { href: '/3d', label: '3D Graphics' },
        { href: '/games', label: 'Games' },
        { href: '/manga', label: 'Read Manga' }, // TODO 
      ].map((item) => (
        <div key={item.href} >
          <Link
            href={item.href}
            className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-200 text-center"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
