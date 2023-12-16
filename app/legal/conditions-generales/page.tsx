import React from 'react'
import { Metadata } from 'next'
import picture_home from "../../../public/pictures/header/picture_home_page.svg"
import Header from "@/components/Header/Header";



export const metadata: Metadata = {
    title: 'Conditions-générales - Bryan Parisot, Développeur Web Freelance',
    description: "Conditions-générales",
    alternates: {
        canonical: `${process.env.URL_SITE}/conditions-generales`
    }

}


export default function page() {
    return (
        <main>
            <Header
                title="Développeur web freelance"
                subtitle="Politique de confidentialité"
                text="Le site web Bryanparisot est détenu par bryanparisot, qui est un contrôleur de données de vos données personnelles."
                image={picture_home}
                alt="image png developpeur web"
            />
            <div className="container mx-auto p-4 mt-14 sm:mt-20">

                <p className="mb-4">
                    Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par Bryanparisot, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d'utiliser le site web de Bryanparisot.
                </p>

                <p className="mb-4">
                    Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.
                </p>

                <h2 className="text-xl font-bold mb-2">Les informations personnelles que nous collectons :</h2>
                <p className="mb-4">
                    Lorsque vous visitez le Bryanparisot, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web ou les produits individuels que vous consultez, sur les sites web ou les termes de recherche qui vous ont renvoyé au site et sur la manière dont vous interagissez avec le site. Nous désignons ces informations collectées automatiquement par le terme "informations sur les appareils". En outre, nous pourrions collecter les données personnelles que vous nous fournissez (y compris, mais sans s'y limiter, le nom, le prénom, l'adresse, les informations de paiement, etc.) lors de l'inscription afin de pouvoir exécuter le contrat.
                </p>

                <h2 className="text-xl font-bold mb-2">Pourquoi traitons-nous vos données ?</h2>
                <p className="mb-4">
                    Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où cela est absolument nécessaire pour maintenir le site web. Les informations collectées automatiquement sont utilisées uniquement pour identifier les cas potentiels d'abus et établir des informations statistiques concernant l'utilisation du site web. Ces informations statistiques ne sont pas autrement agrégées de manière à identifier un utilisateur particulier du système.
                </p>

                <p className="mb-4">
                    Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d'informations, par lesquelles quelqu'un pourrait vous identifier comme un individu spécifique et identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du site web, ou si vous souhaitez recevoir notre lettre d'information ou fournir d'autres détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de résidence, votre organisation, votre numéro de téléphone. Vous pouvez choisir de ne pas nous fournir vos données personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines fonctionnalités du site web. Par exemple, vous ne pourrez pas recevoir notre bulletin d'information ou nous contacter directement à partir du site web. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via
                    <a href="mailto:contact@bryanparisot.com" className="text-blue-500 underline">
                        {' '}
                        contact@bryanparisot.com{' '}
                    </a>.
                </p>

                <h2 className="text-xl font-bold mb-2">Vos droits :</h2>
                <p className="mb-4">
                    Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :
                </p>
                <ul className="list-disc pl-8 mb-4">
                    <li>Le droit d'être informé.</li>
                    <li>Le droit d'accès.</li>
                    <li>Le droit de rectification.</li>
                    <li>Le droit à l'effacement.</li>
                    <li>Le droit de restreindre le traitement.</li>
                    <li>Le droit à la portabilité des données.</li>
                    <li>Le droit d'opposition.</li>
                    <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
                </ul>

                <p className="mb-4">
                    Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.
                </p>

                <p className="mb-4">
                    En outre, si vous êtes un résident européen, nous notons que nous traitons vos informations afin d'exécuter les contrats que nous pourrions avoir avec vous (par exemple, si vous passez une commande par le biais du site), ou autrement pour poursuivre nos intérêts commerciaux légitimes énumérés ci-dessus. En outre, veuillez noter que vos informations pourraient être transférées en dehors de l'Europe, y compris au Canada et aux États-Unis.
                </p>

                <h2 className="text-xl font-bold mb-2">Liens vers d'autres sites web :</h2>
                <p className="mb-4">
                    Notre site web peut contenir des liens vers d'autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre site web et à lire les déclarations de confidentialité de chaque site web susceptible de collecter des informations personnelles.
                </p>

                <h2 className="text-xl font-bold mb-2">Sécurité de l'information :</h2>
                <p className="mb-4">
                    Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.
                </p>

                <h2 className="text-xl font-bold mb-2">Divulgation légale :</h2>
                <p className="mb-4">
                    Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi l'exige ou l'autorise, par exemple pour nous conformer à une citation à comparaître ou à une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d'autrui, enquêter sur une fraude ou répondre à une demande du gouvernement.
                </p>

                <h2 className="text-xl font-bold mb-2">Informations de contact :</h2>
                <p>
                    Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos informations personnelles, vous pouvez envoyer un courriel à
                    <a href="mailto:contact@bryanparisot.com" className="text-blue-500 underline">
                        {' '}
                        contact@bryanparisot.com{' '}
                    </a>.
                </p>
            </div>
        </main>

    )
}
