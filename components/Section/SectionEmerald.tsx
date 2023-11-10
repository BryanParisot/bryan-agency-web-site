import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

interface SectionEmeraldProps {
    image: StaticImageData;
    alt: string;
    children: ReactNode;
}

const SectionEmerald: React.FC<SectionEmeraldProps> = ({ image, alt, children }) => {
    return (
        <div className='flex flex-col sm:flex-row bg-emerald-50 py-20 sm:py-20 sm:px-5 px-0'>
            <div className='px-4 flex items-center w-2/4'>
                <Image src={image} alt={alt} />
            </div>
            <div className='w-full flex sm:w-3/6 px-4'>{children}</div>
        </div>
    )
}

export default SectionEmerald