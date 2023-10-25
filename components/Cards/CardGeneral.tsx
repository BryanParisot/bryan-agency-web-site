import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface CardGeneralProps {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
}

const CardGeneral: React.FC<CardGeneralProps> = ({ title, text, image, alt }) => {
    return (
        <div className='h-full flex flex-col justify-between items-center space-y-4 p-4'>
            <div className='flex items-center justify-center'>
                <Image className='w-22 h-22' src={image} alt={alt} height={100} width={100} />
            </div>
            <div className='space-y-3'>
                <h3 className='text-center text-emerald-950 font-bold text-xl'>
                    {title}
                </h3>
                <p className='text-gray-700 font-light text-center'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CardGeneral