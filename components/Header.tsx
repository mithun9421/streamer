import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeIcon from '../assets/home.png';
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './ui/searchinput';
import GenreDropdown from './ui/GenreDropdown';

export default function Header() {
    return (
        <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
            <Link href='/' mr={10}>
                <Image src={HomeIcon} width={30} height={30} />
            </Link>
            <div className='flex space-x-2'>
                {/* Genre Dropdown */}
                <GenreDropdown />

                {/* Search Input */}
                <SearchInput />

                {/* Theme Icon */}
                <ThemeToggler />
            </div>
        </header>
    )
}
