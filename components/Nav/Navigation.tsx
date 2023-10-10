"use client"

import React from 'react'
import Menu from '../Menu/Menu'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Navigation() {
    return (
        <header className='flex justify-center '>
            <div className='fixed shadow flex items-center justify-between bg-emerald-50/90 h-20 w-full max-w-[90%] rounded-lg text mt-10 px-5'>
                <div>Logo Here</div>
                <div className='w-96'><Menu /></div>
                <Link href="/contact"> <Button variant="secondary" size="lg">Contactez-nous</Button></Link>
            </div>
        </header>
    )
}
