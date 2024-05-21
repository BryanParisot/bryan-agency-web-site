"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HomeCardsProps {
    title: string;
    text: string;
    image: string;
    alt: string;
    link: string;
    bg: string;
}

const HomeCards: React.FC<HomeCardsProps> = ({ title, text, image, alt, link, bg }) => {
    return (
        <motion.div className='bg-gray-50 shadow rounded-md p-5 min-w-96 h-full'>
            <div className='flex flex-col !justify-between space-y-4 h-full'>

                <div className={`${bg} flex items-center justify-end w-20 h-20 rounded p-3`}>
                    <Image src={image} alt={alt} width={100} height={100} />
                </div>

                <div className='space-y-2'>
                    <h3 className='text-red-950 font-extrabold text-2xl'>
                        {title}
                    </h3>
                    <p className='text-gray-700 font-light'>
                        {text}
                    </p>
                </div>

                <div className='flex justify-end'>
                    <Link href={link}>
                        <Button variant='outline' size='lg'>
                            En savoir plus
                        </Button>
                    </Link>
                </div>

            </div>

        </motion.div>
    )
}

export default HomeCards