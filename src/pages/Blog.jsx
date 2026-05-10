import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { allPosts, CATEGORIES } from '../lib/posts'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  const [filter, setFilter] = useState(null)
  const filtered = useMemo(
    () => filter ? allPosts.filter(p => p.category === filter) : allPosts,
    [filter]
  )

  return (
    <>
      <SEO
        title="Field notes from inside a SIL home"
        description="Writing on NDIS policy, SIL operations, clinical implementation, and the ERA framework — from inside Caring Hands SA in Adelaide."
        path="/blog"
        keywords="NDIS SIL blog, SIL operations writing, clinical implementation NDIS"
      />

      <section className="max-w-container mx-auto px-5 sm:px-8 pt-12 pb-8 md:pt-20 md:pb-12">
        <AnimatedSection className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Field notes</p>
          <h1 className="text-4xl md:text-5xl font-display">
            Writing from inside a SIL home.
          </h1>
          <p className="mt-5 text-lg text-ink/80">
            NDIS policy as it actually lands. SIL operations as they actually run. Clinical integration
            as it actually works (and where it breaks).
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-container mx-auto px-5 sm:px-8 pb-6">
        <div className="flex flex-wrap gap-2">
          <FilterChip active={filter === null} onClick={() => setFilter(null)}>All</FilterChip>
          {CATEGORIES.map(c => (
            <FilterChip key={c} active={filter === c} onClick={() => setFilter(c)}>{c}</FilterChip>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-5 sm:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.05}>
              <PostCard post={post} />
            </AnimatedSection>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted py-16">No posts in this category yet.</p>
        )}
      </section>
    </>
  )
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
        active
          ? 'bg-forest text-cream border-forest'
          : 'bg-white text-ink border-line hover:border-forest'
      }`}
    >
      {children}
    </button>
  )
}

function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white border border-line rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-lift transition-shadow h-full"
    >
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-sage/20 text-forest font-medium px-2 py-1 rounded">{post.category}</span>
        <span className="text-muted">·</span>
        <time className="text-muted">{formatDate(post.date)}</time>
        <span className="text-muted">·</span>
        <span className="text-muted">{post.readingMinutes} min read</span>
      </div>
      <h2 className="mt-4 text-2xl font-display text-forest group-hover:text-accent transition-colors">
        {post.title}
      </h2>
      <p className="mt-3 text-ink/80 line-clamp-2">{post.excerpt}</p>
      <p className="mt-5 text-sm font-medium text-accent">Read article →</p>
    </Link>
  )
}
