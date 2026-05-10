// Loads all markdown posts from /content/posts at build/dev time via Vite.
// Frontmatter is parsed inline (no Buffer dependency) — keep it simple.

const modules = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return { data: {}, content: raw }
  const data = {}
  m[1].split('\n').forEach(line => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
    if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1)
    data[key] = val
  })
  return { data, content: m[2] }
}

function readingTime(text) {
  const words = text.replace(/[#*_>`[\](){}-]/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = data.slug || path.split('/').pop().replace(/\.md$/, '')
    return {
      slug,
      title: data.title || slug,
      date: data.date || '2026-01-01',
      category: data.category || 'SIL Operations',
      excerpt: data.excerpt || content.slice(0, 160),
      author: data.author || 'Tanurag Gautam',
      readingMinutes: readingTime(content),
      content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export const allPosts = posts
export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}
export const CATEGORIES = ['NDIS Policy', 'SIL Operations', 'Clinical Integration', 'ERA Framework']
