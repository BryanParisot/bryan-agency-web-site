import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface littleCardProps {
    title: string;
    text: string;
    logo: StaticImageData;
    alt: string;
}

const LittleCard: React.FC<littleCardProps> = ({ title, text, logo, alt }) => {
    return (
        <div className='rounded-lg shadow bg-white p-4 space-y-2'>
            <Image src={logo} alt={alt} />
            <h3 className='font-bold text-lg text-gray-950'>{title}</h3>
            <p className="text-gray-500">{text}</p>
        </div>
    )
}

export default LittleCard