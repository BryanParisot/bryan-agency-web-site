import Link from 'next/link';
import React from 'react';

interface MenuMobileProps {
    onLinkClick: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ onLinkClick }) => {
    const paths = [
        { name: 'Accueil', path: '/' },
        { name: 'Création de site', path: '/site' },
        { name: 'Refonte de site', path: '/site/refonte' },
        { name: 'Application web | Sass', path: '/sass' },
        { name: 'Intégration maquette', path: '/integration' },
        { name: 'SEO', path: '/referencement-naturel-seo' },
        { name: 'SEA', path: '/referencement-sponsorise-sea' },
        { name: 'Web design', path: '/web-design' },
        { name: 'Blog', path: '/blog' },
    ];

    const handleLinkClick = () => {
        onLinkClick();
    };

    return (
        <nav className="w-full h-full text-white">
            <ul className="flex flex-col items-center h-full">
                {paths.map((item, index) => (
                    <li key={index} className="py-4 border-b border-emerald-500 w-full text-center text-lg">
                        {/* Utiliser la fonction handleLinkClick lorsqu'un lien est cliqué */}
                        <Link href={item.path} className="text-lg font-medium hover:text-gray-300" onClick={handleLinkClick}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuMobile;
