import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-green-700 h-15 flex justify-between items-center gap-5 text-white px-5'>
        <div className="logo font-bold text-2xl">
          <Link href='/'>TinyURLx</Link>
        </div>
        <ul className='flex justify-center items-center gap-5 text-lg'>
            <Link href='/'> <li>Home</li> </Link>
            <Link href='/about'> <li>About</li> </Link>
            <Link href='/shorten'> <li>Shorten</li> </Link>
            <Link href='/contact'> <li>Contact us</li> </Link>
            <li className='flex gap-2'>
                <Link href='/shorten'><button className='bg-green-400 shadow-lg py-1 p-2 rounded-lg font-bold'>Try Now</button></Link>
                <Link href='https://github.com/AparmitSrivastava' target='_blank'><button className='bg-green-400 shadow-lg py-1 p-2 rounded-lg font-bold'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
