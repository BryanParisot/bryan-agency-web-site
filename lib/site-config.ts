export const siteConfig = {
  name: 'Bryan Parisot',
  legalName: 'Bryan Parisot - Developpeur web freelance',
  siteUrl: process.env.URL_SITE || 'https://www.bryanparisot.com',
  email: 'contact@bryanparisot.com',
  phone: '+33750966522',
  phoneDisplay: '07 50 96 65 22',
  city: 'Nancy',
  region: 'Grand Est',
  country: 'FR',
}

export function getCanonicalUrl(path = '') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (normalizedPath === '/') {
    return siteConfig.siteUrl
  }

  return `${siteConfig.siteUrl}${normalizedPath}`
}
