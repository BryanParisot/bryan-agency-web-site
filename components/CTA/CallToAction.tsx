import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import boat from "../../public/pictures/CTA/boat.svg"
import Link from 'next/link'

function CallToAction() {
    return (
        <div className='bg-emerald-500 rounded-md w-full mt-20 h-[450px] p-10 flex flex-row items-center'>
            <div className='w-3/6'>
                <h2 className='text-emerald-50 text-2xl font-bold pb-5'>Embarquez avec notre équipage digital et propulsez votre présence en ligne vers de nouveaux sommets ! Contactez-nous dès aujourd'hui pour commencer votre voyage vers le succès.</h2>
                <Link href="/contact"><Button>Lancer votre projet</Button></Link>
            </div>
            <div className='w-3/6 h-full'>
                <Image className='w-full h-full' src={boat} alt="boat" width="100" height="100" />
            </div>
        </div>
    )
}

export default CallToAction