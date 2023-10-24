import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface siteCardsProps {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
    link: string;
}

const SiteCards: React.FC<siteCardsProps> = ({ title, text, image, alt, link }) => {
    return (
        <div className='h-full bg-emerald-50 rounded-md p-4 flex flex-col justify-between items-center space-y-4'>
            <div className='flex items-center justify-center'>
                <Image className='w-20 h-20' src={image} alt={alt} height={100} width={100} />
            </div>
            <div className='space-y-3'>
                <h3 className='text-center text-emerald-950 font-extrabold text-lg'>
                    {title}
                </h3>
                <p className='text-gray-700 font-light text-center'>
                    {text}
                </p>
                <div className='flex items-end justify-center'>
                    <Link href={link}>
                        <Button variant="primary">
                            En savoir plus
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SiteCards