import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.germanland.co.ke'),
  title: {
        default: 'Learn German in Kenya | Germanland Connections - CEFR Certified Courses A1-C1',
        template: '%s | Germanland Connections'
  },
  description: 'Master German language in Kenya with Germanland Connections. CEFR-certified courses from A1 to C1. Expert instructors, flexible schedules (online & physical classes). Start learning today! Call 0740 593 635',
    keywords:[
        'learn german kenya',
        'german classes nairobi',
        'german language courses',
        'CEFR german',
        'goethe institute preparation',
        'study in germany',
        'german courses online kenya',
        'german teacher nairobi',
        'A1 german nairobi',
        'B2 german kenya',
        'TestDaF preparation'
    ],
    authors: [{name: 'Germanland Connections'}],
    creator: 'Germanland Connections',
    publisher: 'Germanland Connections',
    formatDetection:{
        email: false,
        address: false,
        telephone: false,
    },
    openGraph:{
        type: 'website',
        url: 'https://www.germanland.co.ke',
        locale: 'en_KE',
        siteName: 'Germanland Connections',
        title: 'Learn German in Kenya | Germanland Connections - CEFR Certified',
        description: 'Master German language with Kenya\'s leading institute. CEFR-certified courses A1-C1, expert instructors, flexible schedules.',
        images:[
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Germanland Connections - German Language School in Kenya',
            },
        ],
    },
    twitter:{
        card: 'summary_large_image',
        title: 'Learn German in Kenya | Germanland Connections',
        description: 'Master German language with Kenya\'s leading institute. CEFR courses A1-C1.',
        images: ['/twitter-image.jpg'],
        creator: '@germanlandke',
    },
    robots: {
        index: true,
        follow: true,
        googleBot:{
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            "max-snippet" : -1
        },
    },
    verification:{
        google: '',
    },
    alternates:{
        canonical: 'https://www.germanland.co.ke',
    },
    category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        { /* Favicon */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg wid   th='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='32' r='32' fill='%23f3f4f6'/><rect x='8' y='16' width='48' height='10.67' fill='%23000000' rx='2'/><rect x='8' y='26.67' width='48' height='10.67' fill='%23DD0000'/><rect x='8' y='37.34' width='48' height='10.67' fill='%23FFCE00' rx='2'/><text x='32' y='52' font-family='Arial' font-size='28' font-weight='bold' fill='%231f2937' text-anchor='middle'>G</text></svg>" />

        <title>Learn German in Kenya | Germanland Connections - CEFR Certified Courses A1-C1</title>
        {/* Geo Tags*/}
        <meta name="geo.region" content="KE-110" />
        <meta name="geo.placename" content="Nairobi"/>
        <meta name="geo.position" content="-1.286389;36.817223"/>
        <meta name="ICBM" content="-1.286389;36.817223"/>
        {/* Business Contact Information */}
        <meta name="contact" content="0740 593 635"/>
            <meta name="format-detection" content="telephone=yes"/>
                <meta itemProp="telephone" content="+254740593635"/>

        {/* Theme color*/}
        <meta name="theme-color" content="#DD0000"/>

        {/* Structured Data - Organization */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'EducationalOrganization',
                    name: 'Germanland Connections',
                    alternateName: 'Germanland Kenya',
                    url: 'https://www.germanland.co.ke',
                    logo: 'https://www.germanland.co.ke/logo.png',
                    description: 'Premier German language school in Kenya offering CEFR-certified courses from A1 to C1',
                    telephone: '+254740593635',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'Nairobi',
                        addressLocality: 'Nairobi',
                        addressRegion: 'Nairobi County',
                        postalCode: '00100',
                        addressCountry: 'KE',
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: '-1.286389',
                        longitude: '36.817223',
                    },
                    priceRange: 'KES 17,000 - 60,000',
                    aggregateRating: {
                        '@type': 'AggregateRating',
                        ratingValue: '5',
                        bestRating: '5',
                        worstRating: '1',
                        ratingCount: '50',
                    },
                }),
            }}
        />

    </head>
      <body
        className={inter.className}
      >
        {children}

        {/* Add Google Analytics here - AFTER body */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>


      </body>
    </html>
  );
}
