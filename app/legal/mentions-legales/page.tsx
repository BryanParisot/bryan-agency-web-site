import Link from 'next/link';
import React from 'react';

export default function page() {
    return (
        <div className="container mx-auto p-4 mt-40">
            <h1 className="text-3xl font-bold mb-4">MENTIONS LEGALES</h1>
            <p className="mb-4">En vigueur au 06/12/2023</p>

            <p className="mb-4">
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'"Utilisateur", du site
                <a href="https://www.bryanparisot.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {' '}
                    https://www.bryanparisot.com/{' '}
                </a>
                , ci-après le "Site", les présentes mentions légales.
            </p>

            <p className="mb-4">
                La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
            </p>

            <p className="mb-4">
                Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
            </p>

            <h2 className="text-xl font-bold mb-2">ARTICLE 1 - L'EDITEUR</h2>
            <p className="mb-4">
                L'édition du Site est assurée par Bryan Parisot Entrepreneur individuel au capital de 1000 euros, immatriculée au Registre du Commerce et des Sociétés de Luneville sous le numéro 91185474300018 dont le siège social est situé au 9 rue jean girarget, Numéro de téléphone 0750966522, Adresse e-mail:
                <Link href="mailto:contact@bryanparisot.com" className="text-blue-500 underline">
                    {' '}
                    contact@bryanparisot.com{' '}
                </Link>
                . N° de TVA intracommunautaire : FR20911854743. Le Directeur de la publication est Bryan Parisot ci-après l'"Editeur".
            </p>

            <h2 className="text-xl font-bold mb-2">ARTICLE 2 - L'HEBERGEUR</h2>
            <p className="mb-4">
                L'hébergeur du Site est la société Hostinger, dont le siège social est situé au INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, avec le numéro de téléphone : _______________ + adresse mail de contact.
            </p>

            <h2 className="text-xl font-bold mb-2">ARTICLE 3 - ACCES AU SITE</h2>
            <p className="mb-4">
                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
            </p>

            <h2 className="text-xl font-bold mb-2">ARTICLE 4 - COLLECTE DES DONNEES</h2>
            <p className="mb-4">
                Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. En vertu de la loi Informatique et Libertés, en date du 6 janvier
                1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
                <ul className="list-disc pl-8">
                    <li>via un formulaire de contact ;</li>
                </ul>
            </p>

            <p className="mb-4">
                Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
            </p>

            <p className="mb-4">
                Pour plus d'informations en matière de cookies, se reporter à la Charte en matière de cookies du site
                <Link href="https://www.bryanparisot.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {' '}
                    https://www.bryanparisot.com/{' '}
                </Link>
                accessible à la rubrique "Cookies"
            </p>
        </div>
    );
}
