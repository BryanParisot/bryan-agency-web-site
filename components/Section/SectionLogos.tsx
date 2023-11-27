import React from 'react'

//LOGOS
import logo_booking from '../../public/logos/site/vitrine/logo_booking.svg'
import logo_chat from '../../public/logos/site/vitrine/logo_chat.svg'
import logo_form from '../../public/logos/site/vitrine/logo_form.svg'
import logo_translation from '../../public/logos/site/vitrine/logo_translation.svg'
import Image from 'next/image'

interface SectionLogosProps {
    title: string;
}

const SectionLogos: React.FC<SectionLogosProps> = ({ title }) => {

    const dataSection = [
        {
            text: 'Reservation', image: logo_booking, alt: 'Logo de résérvation'
        },
        {
            text: 'Messagerie', image: logo_chat, alt: 'logo messagerie'
        },
        {
            text: 'Formulaire', image: logo_form, alt: 'logo formulaire'
        },
        {
            text: 'Multi-langue', image: logo_translation, alt: 'logo multi langue'
        }
    ]

    return (
        <div className='my-10'>
            <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                {title}
            </h2>
            <div>
                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center px-5 sm:px-20">
                    {
                        dataSection.map((item) => (
                            <div key={item.text} className='flex flex-col items-center justify-center space-y-4'>
                                <Image width={70} height={70} src={item.image} alt={item.alt} />
                                <h3 className='text-emerald-950 text-lg font-bold'>{item.text}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionLogos