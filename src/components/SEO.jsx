import { Helmet } from 'react-helmet-async'

const SITE = 'https://sillive.com.au'
const DEFAULT_OG = `${SITE}/og-default.svg`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  type = 'website',
  keywords,
  schema,
  noindex = false,
}) {
  const url = `${SITE}${path}`
  const fullTitle = title?.includes('SILLIVE') ? title : `${title} — SILLIVE`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SILLIVE" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
