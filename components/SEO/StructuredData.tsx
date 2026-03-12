import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'

export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: [
      {
        '@type': 'City',
        name: 'Nancy',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Meurthe-et-Moselle',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Grand Est',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    sameAs: [
      'https://www.linkedin.com/in/bryan-parisot-a99b0a1b1/',
      'https://www.instagram.com/bryan_parisot/',
      'https://github.com/BryanParisot',
    ],
    serviceType: [
      'Creation de site internet',
      'Referencement naturel',
      'SEO local',
      'Refonte de site web',
      'Developpement web sur mesure',
    ],
  }

  return (
    <Script
      id="structured-data-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  )
}
