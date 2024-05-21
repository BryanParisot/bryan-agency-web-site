import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';


interface HeaderProps {
    title: string;
    subtitle: string;
    text: string;
}


const Header: React.FC<HeaderProps> = ({ title, subtitle, text }) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full xl:h-[800px] bg-secondary pb-10 pt-36 sm:pt-36'>
            <div className='xl:w-3/6 w-full space-y-4 flex flex-col items-center justify-center'>
                <div className='space-y-5 mb-5 flex flex-col items-center justify-center px-4 xl:px-0'>
                    <h1 className='text-base xl:text-2xl font-bold text-secondary bg-black px-5 py-4'>
                        {title}
                    </h1>
                    <h2 className='font-bold text-primary text-4xl xl:text-7xl text-center font-anton line'>
                        {subtitle}
                    </h2>
                    <p className='text-gray-700 xl:text-lg text-base text-center'>
                        {text}
                    </p>
                </div>

                <div className='flex flex-col  xl:flex-row justify-start items-center xl:items-center xl:space-y-0 space-y-5 space-x-0 xl:space-x-4'>

                    <Link href="https://calendly.com/bryanparisot-rdv/30min?month=2024-02">
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
        </div>
    )
}

export default Header