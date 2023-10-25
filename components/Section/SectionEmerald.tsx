import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

interface SectionEmeraldProps {
    image: StaticImageData;
    alt: string;
    children: ReactNode;
}

const SectionEmerald: React.FC<SectionEmeraldProps> = ({ image, alt, children }) => {
    return (
        <div className='flex flex-row bg-emerald-50 py-40'>
            <div className='px-4'>
                <Image src={image} alt={alt} />
            </div>
            <div className='w-3/6 px-4'>{children}</div>
        </div>
    )
}

export default SectionEmerald