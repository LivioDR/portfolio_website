import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
    return [
    {
      url: 'https://livioreinoso.com',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  ]
}