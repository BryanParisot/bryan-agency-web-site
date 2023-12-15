import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

import cat from '../../public/animations/home/Animation - 1698073664929.gif';

function CallToActionFooter() {
    return (
        <div className='bg-emerald-800 h-[500px] sm:h-96 rounded-xl flex flex-row justify-center items-center px-5 sm:bg-red-900 md:bg-black lg:bg-blue-900 xl:bg-yellow-900' >
            <div className='relative sm:mr-10'>
                <div className='hidden xl:flex right-10 bg-emerald-50 shadow rounded-lg h-72 w-72 items-end justify-center'>
                    <Image src={cat} alt='cat animation' height={100} width={100} />
                </div>
            </div>
            <div className='space-y-3 sm:space-y-5 sm:pr-0 md:pr-0 xl:pr-96'>
                <h2 className='text-2xl  md:text-3xl font-bold text-emerald-50'>
                    Découvrez comment je peux booster votre présence en ligne
                </h2>
                <p className='text-emerald-50 text-lg'>
                    Contactez-moi dès aujourd'hui pour discuter de vos besoins en développement web, référencement, applications web et plus encore. En tant que développeur web freelance, je suis prêt à vous aider à naviguer vers le succès numérique.
                </p>                <Link href='/contact'>
                    <Button className='sm:mt-10 mt-5' variant='primary' size='lg'>
                        Contactez-nous
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default CallToActionFooter;
