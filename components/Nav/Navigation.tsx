"use client"

import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
    const [open, setOpen] = useState(false)

    return (
        <header className='flex justify-center'>
            <div className='fixed shadow flex items-center justify-between bg-emerald-50/90 h-20 w-full max-w-[90%] rounded-lg text mt-10 px-5 z-10'>
                <div>Logo Here</div>
                <div className='w-96 hidden sm:block'><Menu /></div>
                <Link className='hidden sm:block' href="/contact"> <Button variant="secondary" size="lg">Contactez-nous</Button></Link>
                <Bars3Icon onClick={() => setOpen(true)} className="h-12 w-12 sm:hidden block cursor-pointer" aria-hidden="true" />
            </div>
            <div className={`bg-emerald-800 w-full h-[600px] absolute p-2 z-50  ${open ? "bottom-0 top-0" : "bottom-[1000px]"}  }`}>
                <div className='flex justify-end w-full'>
                    < XMarkIcon onClick={() => setOpen(false)} className="h-12 w-12 sm:hidde block cursor-pointer text-emerald-50" aria-hidden="true" />
                </div>
                <div className='h-full flex justify-center'>
                    <Menu />
                </div>
            </div>
        </header >
    )
}
