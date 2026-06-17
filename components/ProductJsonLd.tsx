import React from 'react';

interface ProductJsonLdProps {
  name: string;
  description: string;
  url: string;
  logoUrl?: string;
}

const ProductJsonLd = ({ name, description, url, logoUrl }: ProductJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "url": `https://aidniglobal.in${url}`,
    "logo": `https://aidniglobal.in${logoUrl || "/images/logos/gaatha-phoenix-logo.png"}`,
    "brand": {
      "@type": "Brand",
      "name": "Aidni Global",
      "logo": "https://aidniglobal.in/images/logos/aidni-logo.webp"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://aidniglobal.in${url}`,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Aidni Global LLP"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductJsonLd;