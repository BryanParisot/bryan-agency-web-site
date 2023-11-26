import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface SectionWithPicturesProps {
    title: string,
    description: string,
    image: StaticImageData,
    alt: string,
    buttonText?: string, 
    buttonLink?: string,
}



const SectionWithPictures: React.FC<SectionWithPicturesProps> = ({ title, description, image, alt, buttonLink, buttonText }) => {
    return (
        <div className="animated fadeIn mb-8 flex flex-col sm:flex-row mt-20">
            <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                {" "}
                <Image
                    alt={alt}
                    className="rounded-xl shadow-xl shadow-emerald-900/20"
                    src={image}
                />
            </div>
            <div className="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-6/12 space-y-5">
                <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                    {title}{" "}
                </h2>
                <span className="h-1 w-56 bg-emerald-900"></span>
                <div className="text mt-5 space-y-3 text-lg text-gray-700 md:text-left">
                    <span className="block">{description} </span>
                </div>
                {buttonText && (
                    <Link href={buttonLink || "#"} >
                        <Button variant="primary" size="lg">
                            {buttonText}
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default SectionWithPictures;
