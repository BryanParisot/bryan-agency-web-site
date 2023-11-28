"use client"

import { sendEmail } from '@/utils/send-email';
import React, { FC, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import ReCAPTCHA from 'react-google-recaptcha';


export type FormData = {
    prenom: string;
    nom: string;
    email: string;
    message: string;
    numero: number;
    check: boolean;
    recaptcha: string | null;
};

const Form: FC = () => {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>();

    const recaptchaValue = watch('recaptcha');

    const onSubmitHandler = async (data: FormData) => {

        if (!recaptchaValue) {
            toast.error('Veuillez valider le ReCAPTCHA avant d\'envoyer le formulaire.');
            return;
        }

        setLoading(true);
        try {
            await sendEmail(data);
            toast.success('Email envoyé avec succès!');
            reset();
        } catch (error) {
            toast.error('Erreur lors de l\'envoi de l\'email');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <Toaster
                position="bottom-center"
                containerClassName="z-50"
            />
            <form onSubmit={handleSubmit(onSubmitHandler)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="prenom" className="block text-sm font-semibold leading-6 text-gray-900">
                                Prenom *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    id="prenom"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                    {...register('prenom', { required: true })}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="nom" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nom *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    id="nom"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('nom', { required: true })}

                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('email', { required: true })}

                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="numero" className="block text-sm font-semibold leading-6 text-gray-900">
                                Numéro *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="number"
                                    id="numero"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('numero', { required: true })}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message *
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                    {...register('message', { required: true })}

                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-2">
                            <div className="flex flex-row h-6 items-center gap-2">
                                <input
                                    id="check"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-emerald-600"
                                    {...register('check', { required: true })}
                                />
                                <label htmlFor="candidates" className="font-medium text-gray-900"></label>
                                <span className="text-gray-400 text-sm">En soumettant ce formulaire, j’autorise à exploiter les informations saisies dans le cadre de la relation commerciale qui peut en découler.</span>
                            </div>
                        </div>
                        {errors.check && <span className='text-red-900 text-xs'>Acceptez les conditions d'envoies</span>}
                    </div>
                    <div className="mt-10 flex flex-col-reverse sm:flex-row-reverse justify-between gap-5 sm:gap-0">
                        <Button
                            variant="primary"
                            size="lg"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Envoi en cours...' : 'Envoyer'}
                        </Button>
                        <ReCAPTCHA
                            sitekey='6LdDLR8pAAAAABcRSpzleoB_konxunFnH4C4gw4S'
                            onChange={(value) => setValue('recaptcha', value)}
                        />
                    </div>
                </div>
            </form >

        </div >
    )
}

export default Form                          
