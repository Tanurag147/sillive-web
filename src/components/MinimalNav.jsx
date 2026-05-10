import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function MinimalNav() {
  return (
    <header className="border-b border-line bg-cream">
      <div className="max-w-container mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" aria-label="SILLIVE home"><Logo size="md" theme="light" /></Link>
        <Link to="/pricing" className="text-sm font-medium text-forest hover:text-forest-700">
          See pricing →
        </Link>
      </div>
    </header>
  )
}
