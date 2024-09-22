"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const items = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Characters',
            path: '/characters'
        },
        {
            name: 'Locations',
            path: '/locations'
        },
        {
            name: 'Episodes',
            path: '/episodes'
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap p-5 lg:px-16 border-b border-green-400 bg-green-100">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image
                    src="/logo.svg"
                    alt=""
                    className=""
                    width={120}
                    height={60}
                />
                {/* <span className="font-semibold text-xl tracking-tight">Rick and Morty APP</span> */}
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-800 border-green-400"
                    onClick={toggleMenu}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end`}>
                <div className="lg:flex-grow lg:flex lg:justify-end lg:space-x-8 space-y-4 lg:space-y-0">
                    {items.map((item, index) => (
                        <Link href={item.path} className="block lg:inline-block text-xl font-semibold leading-6 text-gray-900 group relative w-max">
                            <span>{item.name}</span>
                            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-green-600 group-hover:w-3/6"></span>
                            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-green-600 group-hover:w-3/6"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
