"use client"
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
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
            <div className='xl:w-4/6 w-full space-y-4 flex flex-col items-center justify-center'>
                <div className='space-y-5 mb-5 flex flex-col items-center justify-center px-4 xl:px-0'>
                    <motion.h1
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 20 }}
                        transition={{ duration: .6, delay: .40 }}
                        className='text-base xl:text-2xl font-bold text-secondary bg-black px-5 py-4'>
                        {title}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 20 }}
                        transition={{ duration: .6, delay: .90 }}

                        className='font-bold text-primary text-4xl xl:text-7xl text-center font-anton line'>

                        {subtitle}
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 20 }}
                        transition={{ duration: .6, delay: 1.10 }}
                        className='text-gray-700 xl:text-lg text-base text-center'>
                        {text}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 20 }}
                    transition={{ duration: .6, delay: 1.50 }}
                    className='flex flex-col  xl:flex-row justify-start items-center xl:items-center xl:space-y-0 space-y-5 space-x-0 xl:space-x-4'>

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
                </motion.div>
            </div>
        </div>
    )
}

export default Header