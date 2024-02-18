import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'

interface MenuMobileProps {
    onLinkClick: () => void;
    href: string,
    name: string
}


const MenuMobile: React.FC<MenuMobileProps> = ({ onLinkClick, href, name }) => {
    const handleLinkClick = () => {
        onLinkClick();
    };

    const linkVar = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.7,
            },
        },
    }

    return (
        <motion.div
            variants={linkVar}
            className="py-4 w-full text-center text-lg font-lora uppercase text-white">
            <Link href={href} className="text-1xl" onClick={handleLinkClick}>
                {name}
            </Link>
        </motion.div>
    );
};

export default MenuMobile;
