```javascript
/**
 * Structured Data Helpers — Project
 * Import and use in your SEO.jsx component
 */

export const SITE_URL = 'https://project.com';
export const SITE_NAME = 'Project';
export const INDUSTRY = 'ai';

/** Organization schema */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [],
};

/** Website schema with SearchAction */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

/** Breadcrumb schema builder */
export const breadcrumbSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: (items || []).map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.path ? `${SITE_URL}${item.path}` : SITE_URL,
  })),
});

/** FAQ schema builder */
export const faqSchema = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: (faqs || []).map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
});

/** Product schema builder */
export const productSchema = ({
  name,
  description,
  image,
  sku,
  price,
  currency = 'USD',
  availability = 'InStock',
  rating,
  reviewCount,
} = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image,
  sku,
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: currency,
    availability: `https://schema.org/${availability}`,
    url: typeof window !== 'undefined' ? window.location.href : SITE_URL,
  },
  ...(rating
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: rating,
          reviewCount: reviewCount || 1,
        },
      }
    : {}),
});

const structuredData = {
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  productSchema,
};

export default structuredData;
```