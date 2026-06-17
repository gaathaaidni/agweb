import React from 'react';

const OrganizationJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aidniglobal.in/#organization",
        "name": "Aidni Global LLP",
        "url": "https://aidniglobal.in",
        "logo": "https://aidniglobal.in/images/logos/aidni-logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-90990-28291",
          "contactType": "customer service",
          "email": "office@aidniglobal.in",
          "areaServed": "Global"
        },
        "sameAs": [
          "https://linkedin.com/company/aidniglobal"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://aidniglobal.in/#website",
        "url": "https://aidniglobal.in",
        "name": "Aidni Global",
        "publisher": { "@id": "https://aidniglobal.in/#organization" }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationJsonLd;