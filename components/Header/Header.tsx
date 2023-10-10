import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

interface HeaderProps {
    title: string,
    subtitle: string,
    text: string
    image: string,
    alt: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, text, image, alt }) => {
    return (
        <div className='flex flex-row w-full h-[700px] bg-emerald-900 '>
            <div className='mt-46 flex flex-row items-center justify-between px-20'>
                <div className='w-3/6  space-y-2'>
                    <h1 className='text-2xl font-bold text-emerald-400'>{title}</h1>
                    <h2 className='font-semibold text-emerald-50 text-xl'>{subtitle}</h2>
                    <p className='text-emerald-50 text-lg'>{text}</p>
                    <Button>Discutons de votre projet</Button>
                </div>
                <div className='w-2/6'>
                    <Image src={image} alt={alt} />
                </div>
            </div>
        </div>
    )
}

export default Header