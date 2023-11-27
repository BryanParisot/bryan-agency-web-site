import React from 'react'
import { Button } from '../ui/button'
import Image, { StaticImageData } from 'next/image'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


interface HeaderProps {
    title: string;
    subtitle: string;
    text: string;
    image: StaticImageData;
    alt: string;
}


const Header: React.FC<HeaderProps> = ({ title, subtitle, text, image, alt }) => {
    return (
        <div className='flex flex-row w-full h-full sm:h-[700px] bg-emerald-900 pb-10 pt-36 sm:pt-36'>
            <div className='sm:mt-46 flex flex-row items-center justify-between px-8 sm:px-20'>
                <div className='sm:w-3/6 w-full space-y-4'>
                    <div className='space-y-3 mb-5'>
                        <h1 className='text-base sm:text-2xl font-bold text-emerald-400'>
                            {title}
                        </h1>
                        <h2 className='font-semibold text-emerald-50 text-2xl sm:text-3xl'>
                            {subtitle}
                        </h2>
                        <p className='text-emerald-50 sm:text-lg text-base'>
                            {text}
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center sm:space-y-0 space-y-5 space-x-0 sm:space-x-4'>

                        <Link href="/contact">
                            <Button size="lg">
                                <ChatBubbleBottomCenterIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                Discutons de votre projet
                            </Button>
                        </Link>
                        <Link href="tel:0750966522">
                            <Button size="lg" variant="primary">
                                Appelez-nous
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='hidden  sm:block :w-2/6'>
                    <Image src={image} alt={alt} />
                </div>
            </div>
        </div>
    )
}

export default Header