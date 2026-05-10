import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MinimalNav from './components/MinimalNav'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const NotFound = lazy(() => import('./pages/NotFound'))

const SilSoftware = lazy(() => import('./pages/landing/SilSoftwareAustralia'))
const AuditReadiness = lazy(() => import('./pages/landing/NdisSilAuditReadiness'))
const ClinicalPlan = lazy(() => import('./pages/landing/ClinicalPlanImplementation'))
const ScReporting = lazy(() => import('./pages/landing/SupportCoordinatorReporting'))
const ShiftDocs = lazy(() => import('./pages/landing/NdisShiftDocumentation'))
const AuditChecklist = lazy(() => import('./pages/AuditChecklist'))

function PageFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center" aria-busy="true">
      <div className="w-8 h-8 rounded-full border-2 border-forest border-t-transparent animate-spin" aria-label="Loading" />
    </div>
  )
}

function MainLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <Navbar />
      <main id="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

function LandingLayout() {
  return (
    <>
      <MinimalNav />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  )
}

function PrintLayout() {
  return <main id="main"><Outlet /></main>
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-forest focus:text-cream focus:px-3 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<LandingLayout />}>
            <Route path="/sil-software-australia" element={<SilSoftware />} />
            <Route path="/ndis-sil-audit-readiness" element={<AuditReadiness />} />
            <Route path="/clinical-plan-implementation" element={<ClinicalPlan />} />
            <Route path="/support-coordinator-reporting" element={<ScReporting />} />
            <Route path="/ndis-shift-documentation" element={<ShiftDocs />} />
          </Route>
          <Route element={<PrintLayout />}>
            <Route path="/audit-checklist" element={<AuditChecklist />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
