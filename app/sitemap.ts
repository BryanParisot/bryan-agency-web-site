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

    const routes: SitemapEntry[] = ['', 'creation-site-internet','creation-site-internet/e-commerce','creation-site-internet/landing-page','creation-site-internet/maintenance-wordpress','creation-site-internet/refonte','creation-site-internet/site-vitrine','creation-site-internet/wordpress-personnalise', 'sass', 'web-design', 'referencement-sponsorise-sea', 'referencement-naturel-seo', 'realisation', 'blog', 'integration', 'contact', 'legal/mentions-legales','legal/conditions-generales'].map((route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date(),
        changeFrequency,
    }));

    return [...routes, ...post];
}
