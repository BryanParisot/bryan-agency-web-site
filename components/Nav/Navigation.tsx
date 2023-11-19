"use client"

import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import { Button } from '../ui/button'
import Link from 'next/link'
import MenuMobile from '../Menu/MenuMobile'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className='flex justify-center'>
            <div className='fixed shadow flex items-center justify-between bg-emerald-50/90 h-20 w-full max-w-[90%] rounded-lg text mt-10 px-5 z-10'>
                <div>Logo Here</div>
                <div className='hidden sm:flex sm:items-center'>
                    <Menu />
                    <Link className='hidden sm:block' href="/contact">
                        <Button variant="secondary" size="lg">
                            Contactez-nous
                        </Button>
                    </Link>
                </div>
                <Bars3Icon onClick={() => setMenuOpen(true)} className="h-12 w-12 sm:hidden block cursor-pointer" aria-hidden="true" />
            </div>
            {menuOpen && (
                <div className="bg-emerald-800 w-full h-full fixed top-0 left-0 p-2 z-50">
                    <div className="flex justify-end w-full">
                        <XMarkIcon onClick={() => setMenuOpen(false)} className="h-12 w-12 cursor-pointer text-emerald-50" aria-hidden="true" />
                    </div>
                    <div className="h-full flex justify-center">
                        <MenuMobile onLinkClick={closeMenu} />
                    </div>
                </div>
            )}
        </header >
    )
}
