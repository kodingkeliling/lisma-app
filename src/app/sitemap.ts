import { MetadataRoute } from 'next'

const SITE_URL = 'https://lisma-unpas.vercel.app' // Ganti dengan domain Anda

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/tentang', '/kegiatan', '/galeri', '/kontak', '/pendaftaran']
    .map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))

  return [...routes]
}
