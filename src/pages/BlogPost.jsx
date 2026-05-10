import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { getPostBySlug, allPosts } from '../lib/posts'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const [copied, setCopied] = useState(false)

  if (!post) return <Navigate to="/blog" replace />

  const url = `https://sillive.com.au/blog/${post.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'SILLIVE', logo: { '@type': 'ImageObject', url: 'https://sillive.com.au/favicon.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category,
  }

  const related = allPosts.filter(p => p.slug !== post.slug).slice(0, 2)

  function copyLink() {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        keywords={`${post.category}, NDIS, SIL operations`}
        schema={schema}
      />

      <article className="max-w-prose mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-12">
        <AnimatedSection>
          <div className="flex items-center gap-2 text-xs mb-5">
            <Link to="/blog" className="text-muted hover:text-forest">← Field notes</Link>
            <span className="text-muted">·</span>
            <span className="bg-sage/20 text-forest font-medium px-2 py-0.5 rounded">{post.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display leading-[1.15]">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-muted">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="prose-content mt-10 text-ink">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: (p) => <h2 className="text-2xl md:text-3xl font-display mt-12 mb-4" {...p} />,
                h3: (p) => <h3 className="text-xl font-display mt-8 mb-3" {...p} />,
                p: (p) => <p className="text-lg leading-relaxed mb-5 text-ink/85" {...p} />,
                ul: (p) => <ul className="list-disc pl-6 mb-5 space-y-2 text-ink/85 text-lg" {...p} />,
                ol: (p) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-ink/85 text-lg" {...p} />,
                blockquote: (p) => <blockquote className="border-l-4 border-accent bg-cream pl-5 py-3 my-6 italic text-forest" {...p} />,
                a: (p) => <a className="text-accent underline underline-offset-2 hover:text-accent-700" {...p} />,
                code: ({inline, ...p}) => inline
                  ? <code className="bg-cream border border-line rounded px-1.5 py-0.5 text-sm" {...p} />
                  : <code {...p} />,
                pre: (p) => <pre className="bg-forest text-cream rounded-lg p-4 my-5 overflow-x-auto text-sm" {...p} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </AnimatedSection>

        <div className="mt-12 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-forest text-cream font-display flex items-center justify-center">T</div>
            <div>
              <p className="text-sm font-medium text-forest">{post.author}</p>
              <p className="text-xs text-muted">Director · Caring Hands SA · Founder, SILLIVE</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
              target="_blank" rel="noreferrer"
              className="text-xs font-medium border border-line hover:border-forest text-ink hover:text-forest px-3 py-2 rounded-lg"
              aria-label="Share on LinkedIn"
            >
              Share on LinkedIn
            </a>
            <button
              onClick={copyLink}
              className="text-xs font-medium bg-forest text-cream px-3 py-2 rounded-lg hover:bg-forest-700"
              aria-label="Copy link to article"
            >
              {copied ? 'Copied ✓' : 'Copy link'}
            </button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-cream border-t border-line py-16">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-4">Related</p>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="block bg-white border border-line rounded-xl p-6 hover:shadow-soft transition-shadow">
                  <p className="text-xs text-muted mb-2">{p.category} · {p.readingMinutes} min</p>
                  <h3 className="font-display text-lg text-forest">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
