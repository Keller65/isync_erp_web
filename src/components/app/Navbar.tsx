"use client"

import Image from 'next/image'

function Navbar() {
  return (
    <nav className="w-full p-4 absolute top-0 left-0 flex justify-center items-center z-10 gap-16">
      <Image src="/iSync_logo.svg" alt="Logo iSync" width={40} height={40} className="aspect-square" />

      <ul className="flex space-x-10">
        <li><a href="#features">Beneficios</a></li>
        <li><a href="#pricing">Soporte Técnico</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="/pricing">Precios</a></li>
      </ul>
    </nav>
  )
}

export default Navbar