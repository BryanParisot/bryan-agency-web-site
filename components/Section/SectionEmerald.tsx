import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

interface SectionEmeraldProps {
    image: StaticImageData;
    alt: string;
    children: ReactNode;
}

const SectionEmerald: React.FC<SectionEmeraldProps> = ({ image, alt, children }) => {
    return (
        <div className='flex flex-col lg:flex-row bg-emerald-50 py-20 lg:py-20 lg:px-16 px-5 space-y-4 lg:space-y-0'>
            <div className='px-4 flex items-center w-full lg:w-3/4'>
                <Image src={image} alt={alt} />
            </div>
            <div className='w-full flex lg:w-3/6 px-4'>{children}</div>
        </div>
    )
}

export default SectionEmerald