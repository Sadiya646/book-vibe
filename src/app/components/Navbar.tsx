import React from 'react';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <a href="#" className="border border-transparent hover:border-[#23cb01] hover:text-[#23cb01] text-gray-600 font-medium rounded-xl px-4 py-2 bg-transparent transition-all duration-200">
                    Home
                </a>
            </li>
            <li>
                <a href="#" className="border border-transparent hover:border-[#23cb01] hover:text-[#23cb01] text-gray-600 font-medium rounded-xl px-4 py-2 bg-transparent transition-all duration-200">
                    Listed Books
                </a>
            </li>
            <li>
                <a href="#" className="border border-transparent hover:border-[#23cb01] hover:text-[#23cb01] text-gray-600 font-medium rounded-xl px-4 py-2 bg-transparent transition-all duration-200">
                    Pages to Read
                </a>
            </li>
        </>
    );

    return (
       <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm'>
         <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 py-4 ">
            {/* Navbar Start: Mobile Menu & Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl font-bold tracking-tight text-black cursor-pointer">Book Vibe</a>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3 items-center">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar End: Sign In & Sign Up Buttons */}
            <div className="navbar-end space-x-3">
                <a className="btn bg-[#23cb01] hover:bg-[#1fb301] text-white border-none px-6 rounded-xl font-medium shadow-none">
                    Sign In
                </a>
                <a className="btn bg-[#50c8de] hover:bg-[#45b4c7] text-white border-none px-6 rounded-xl font-medium shadow-none">
                    Sign Up
                </a>
            </div>
        </div>
       </div>
    );
};

export default Navbar;