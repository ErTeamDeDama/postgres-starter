'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image src="/ValidaFakePrimario.png" alt="ValidaFake logo" width={50} height={40} />
      </Link>

      <div className="menu-pc">
        <Link href="/fake-toolkit" className= "menu-link">
          Rileva le Fake News
        </Link>
        <Link href="/how" className= "menu-link">
          Come funziona
        </Link>
        <Link href="/about" className= "menu-link">
         Chi siamo
        </Link>
      </div>

      <Link href="/login" className= "text-2xl font-bold text-white"> Login
      </Link>
    </nav>
  );
};

export default Navbar;
