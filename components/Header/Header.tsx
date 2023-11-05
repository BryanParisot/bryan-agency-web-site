import React from 'react'
import { Button } from '../ui/button'
import Image, { StaticImageData } from 'next/image'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'


interface HeaderProps {
    title: string;
    subtitle: string;
    text: string;
    image: StaticImageData;
    alt: string;
}


const Header: React.FC<HeaderProps> = ({ title, subtitle, text, image, alt }) => {
    return (
        <div className='flex flex-row w-full h-[600px] sm:h-[700px] bg-emerald-900 '>
            <div className='mt-24 sm:mt-46 flex flex-row items-center justify-between px-12 sm:px-20'>
                <div className='sm:w-3/6 w-full space-y-4'>
                    <div className='space-y-3 mb-5'>
                        <h1 className='text-base sm:text-3xl font-bold text-emerald-400'>
                            {title}
                        </h1>
                        <h2 className='font-semibold text-emerald-50 text-2xl sm:text-4xl'>
                            {subtitle}
                        </h2>
                        <p className='text-emerald-50 sm:text-lg text-base'>
                            {text}
                        </p>
                    </div>

                    <Button>
                        <ChatBubbleBottomCenterIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                        Discutons de votre projet
                    </Button>
                </div>
                <div className='hidden  sm:block :w-2/6'>
                    <Image src={image} alt={alt} />
                </div>
            </div>
        </div>
    )
}

export default Header