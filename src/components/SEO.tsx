import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  name?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  canonical?: string;
  schemaType?: 'Article' | 'BreadcrumbList' | 'WebSite' | 'Organization' | 'WebPage' | 'Course' | 'Product';
  schemaData?: Record<string, unknown>;
};

const baseDomain = 'https://www.querosercatolico.com.br';

const SEO = ({
  title = 'Como Rezar o Terço Online | Quero Ser Católico - Aprenda a Rezar o Santo Terço',
  description = 'Aprenda como rezar o terço católico passo a passo. Reze o santo terço online com guia completo, orações tradicionais e meditação dos mistérios. Plataforma gratuita para sua devoção mariana.',
  keywords = 'como rezar o terço, rezar terço online, santo terço, terço católico, aprenda rezar terço, terço online grátis, oração do terço, ave maria, pai nosso, rosário católico, orações católicas, igreja católica, nossa senhora, devoção mariana, mistérios do terço, como fazer o terço, passo a passo terço',
  type = 'website',
  name = 'Quero Ser Católico',
  url = baseDomain,
  image = '/og-image-terco.jpg',
  imageAlt = 'Como Rezar o Santo Terço - Guia Católico Online',
  publishedTime,
  modifiedTime,
  author = 'Quero Ser Católico',
  section,
  canonical = baseDomain,
  schemaType = 'WebPage',
  schemaData = {},
}: SEOProps) => {
  
  // Construir URL completa da imagem
  const imageUrl = image.startsWith('http') ? image : `${baseDomain}${image}`;
  
  // Preparar o schema.org básico
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    ...schemaData,
  };
  
  // Construir schema.org para página
  const pageSchema = {
    ...baseSchema,
    name: title,
    description,
    inLanguage: 'pt-BR',
    url,
    ...(schemaType === 'Article' ? {
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Quero Ser Católico',
        logo: {
          '@type': 'ImageObject',
          url: `${baseDomain}/favicon.png`,
          width: 60,
          height: 60,
        },
      },
      articleSection: section,
    } : {}),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@querosercatolico" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Artigo específico */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      
      {/* Schema.org */}
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
    </Helmet>
  );
};

export default SEO; 