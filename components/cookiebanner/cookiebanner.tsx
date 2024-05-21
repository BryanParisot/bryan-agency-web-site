'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])


    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        // Vérifier si window.gtag est défini avant de l'appeler
        if (typeof window.gtag === 'function') {
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
        }

        setLocalStorage("cookie_consent", cookieConsent)
    }, [cookieConsent]);
    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent != null ? "hidden" : "flex"}
                         px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-red-50 rounded-lg shadow text-red-900`}>

            <div className='text-center font-medium'>
                <Link href="/legal/conditions-generales"><p>Nous utilisons des <span className='font-bold text-primary'>cookies</span> sur notre site.</p></Link>
            </div>


            <div className='flex gap-2'>
                <Button variant="destructive" className='...' onClick={() => setCookieConsent(false)}>Refuser</Button>
                <Button variant="secondary" className='...' onClick={() => setCookieConsent(true)}>Accepter</Button>
            </div>
        </div>
    )
}