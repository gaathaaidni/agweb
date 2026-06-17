# Aidni Global Website

This repository contains the codebase for the Aidni Global corporate website, built with Next.js and Tailwind CSS. The website showcases Aidni Global's strategic consulting services, cross-border business development, and its innovative SaaS product ecosystem (Gaatha Suite, Phoenix, GaathaAI).

## Technologies Used

-   **Next.js 15 (App Router)**: For a performant, SEO-friendly, and scalable React application.
-   **React**: The core JavaScript library for building user interfaces.
-   **Tailwind CSS**: A utility-first CSS framework for rapid and responsive UI development.
-   **Lucide React**: A collection of beautiful and customizable open-source icons.
-   **TypeScript**: For type safety and improved developer experience.

## Features

-   **Multi-page Structure**:
    -   **Home Page**: Engaging hero section, overview of services, and a "How We Work" process.
    -   **About Us Page**: Detailed company philosophy, core competencies, and client testimonials.
    -   **Gaatha Suite Page**: Dedicated landing page for the Gaatha Suite product, detailing its applications and pricing.
    -   **Phoenix Page**: Dedicated landing page for the Phoenix investment platform, outlining programs and country coverage.
    -   **Contact Page**: Comprehensive contact information and a dynamic contact form.
-   **Responsive Navigation**: A sticky header featuring context-aware branding and a mobile menu.
-   **Context-Aware Branding**: Dynamic logo switching between Aidni Global and Gaatha Ecosystem based on the active route, featuring a smooth cross-fade transition.
-   **Image Optimization**: Utilizes Next.js's `Image` component for optimized image loading, preventing layout shifts, and improving performance.
-   **Contact Form**:
    -   Client-side validation for required fields and email format.
    -   Server-side API route (`/api/contact`) for handling submissions.
    -   Basic in-memory rate limiting to prevent spam.
    -   **Email Integration**: Uses Resend for reliable email delivery of contact form submissions.
    -   Success message state after successful submission.
    -   **Custom 404 Page**: A user-friendly error page for invalid URLs.
-   **Structured Data**: Implementation of Schema.org JSON-LD for Organization and Products (Gaatha Suite, Phoenix) to enhance search engine visibility.
-   **PWA Ready**: Web App Manifest (`manifest.json`) configured for better mobile integration and installation.
-   **SEO & Social Sharing**: Configured `next/head` metadata for better search engine visibility and Open Graph tags for rich social media previews.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd Aidniglobalwebsite
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open http://localhost:3000 with your browser to see the result.

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root of your project and add your Resend API key:
    ```
    RESEND_API_KEY=re_YOUR_RESEND_API_KEY
    ```
## Project Structure

```
Aidniglobalwebsite/
├── public/
│   ├── favicon.ico
│   ├── icon.png
│   ├── apple-icon.png
│   ├── manifest.json
│   └── images/
│       ├── about/
│       │   └── team-photo.jpg
│       ├── gaatha-suite/
│       │   └── cropped-cropped-img-20250519-103858-748.webp
│       ├── home/
│       │   ├── about-section-img.jpg
│       │   └── hero-bg.jpg
│       ├── og-image.jpg
│       └── logos/
│           ├── aidni-logo.webp
│           └── gaatha-phoenix-logo.png
│       └── testimonials/
│           ├── female-3.jpg
│           ├── male-1.jpg
│           └── male-3.jpg
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── gaatha-suite/
│   │   │   └── page.tsx
│   │   ├── phoenix/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   └── components/
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── OrganizationJsonLd.tsx
│       └── ProductJsonLd.tsx
├── .gitignore
├── next.config.mjs
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── webcontent.txt
```

---

**Note**: For production deployments, consider replacing the in-memory rate limiter with a persistent store like Redis for more robust rate limiting across multiple server instances.