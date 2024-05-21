import { MetadataRoute } from 'next'
import { allPosts, Post } from 'contentlayer/generated'


type SitemapEntry = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
};

const siteUrl = 'https://www.bryanparisot.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const posts: Post[] = await allPosts
const changeFrequency: SitemapEntry['changeFrequency'] = 'daily';

    const post = posts.map(({url, date}) => ({
      url: `${siteUrl}${url}`,
      lastModified: date,
      changeFrequency
    }))

    const routes: SitemapEntry[] = ['', 'creation-site-internet-nancy','creation-site-internet-nancy/e-commerce','creation-site-internet-nancy/landing-page','creation-site-internet-nancy/maintenance-wordpress','creation-site-internet-nancy/refonte','creation-site-internet-nancy/site-vitrine','creation-site-internet-nancy/wordpress-personnalise', 'saas', 'web-design', 'referencement-sponsorise-sea', 'referencement-naturel-seo', 'realisation', 'blog', 'integration', 'contact', 'legal/mentions-legales','legal/conditions-generales','developpeur-web-freelance-luneville','agence-web-a-baccarat'].map((route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date(),
        changeFrequency,
    }));

    return [...routes, ...post];
}
