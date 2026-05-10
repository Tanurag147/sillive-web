import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <section className="max-w-container mx-auto px-5 sm:px-8 py-24 text-center">
      <SEO title="Page not found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <p className="text-accent font-medium mb-3">404</p>
      <h1 className="text-4xl mb-4">Page not found</h1>
      <p className="text-muted mb-8 max-w-md mx-auto">The page you were looking for has moved or doesn't exist.</p>
      <Link to="/" className="inline-block bg-forest text-cream font-medium px-5 py-2.5 rounded-lg">Back to home</Link>
    </section>
  )
}
