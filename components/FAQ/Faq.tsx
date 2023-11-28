"use client"

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqProps {
    faq: FaqItem[];
}
const Faq: React.FC<FaqProps> = ({ faq }) => {

    return (
        <div className="bg-emerald-100">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-emerald-950 text-center">Encore des questions ? </h2>
                    <dl className="mt-10">
                        {faq.map((FaqItem) => (
                            <Disclosure as="div" key={FaqItem.question} className="p-6 bg-emerald-50 rounded mt-4">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900  mb-1">
                                                <span className="text-base font-semibold leading-6 sm:leading-7 px-3 ">{FaqItem.question}</span>
                                                <span className="ml-6 flex h-7 items-center ">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-10">
                                            <p className="text-base leading-7 text-gray-600  px-3">{FaqItem.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Faq