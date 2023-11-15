"use client"

import { sendEmail } from '@/utils/send-email';
import React, { FC } from 'react'


import { useForm } from 'react-hook-form';

export type FormData = {
    prenom: string;
    nom: string;
    email: string;
    message: string;
    numero: string;
};

const Form: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmitHandler = (data: FormData) => {
        sendEmail(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="prenom" className="block text-sm font-semibold leading-6 text-gray-900">
                                Prenom
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    id="prenom"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('prenom', { required: true })}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="nom" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nom
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
                                Email
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
                                Numéro
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    id="numero"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('numero', { required: true })}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
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
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Form