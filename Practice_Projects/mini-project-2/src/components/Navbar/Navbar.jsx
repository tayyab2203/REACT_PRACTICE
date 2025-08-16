import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between p-4 items-center bg-teal-600 shadow-md sticky top-0'>
        <div className="logo font-semibold text-2xl ">ContactList</div>
        <ul className='flex gap-3.5 '>
            <li className="px-2 hover:text-indigo-900 hover:scale-105 transition-transform font-bold cursor-pointer">Home</li>

            <li className="px-2 hover:text-indigo-900 hover:scale-105 transition-transform font-bold cursor-pointer">About</li>
            <li className='px-2 hover:text-indigo-900 hover:scale-105 transition-transform font-bold cursor-pointer'>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar