import type { Metadata } from 'next';

export const neitzenMetadata: Metadata = {
  metadataBase: new URL('https://www.neitzen.com'),
  title: {
    default: 'Neitzen Technologies',
    template: '%s | Neitzen'
  },
  description: 'Networking of Enterprise and Internet Citizens.',
  keywords: [
    'AGI Research', 
    'Assistive Technology', 
    'AI Model Training Data', 
    'Neitzen', 
    'AIDA OS', 
    'Artificial General Intelligence Nigeria',
    'Artificial General Intelligence'
  ],
  authors: [{ name: 'Kevin Oluebube' }],
  creator: 'Neitzen, Inc.',
  
  // FACEBOOK, INSTAGRAM, LINKEDIN (OpenGraph)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.neitzen.com',
    siteName: 'Neitzen',
    title: 'Neitzen | Pioneering Assistive Intelligence & AGI',
    description: 'Networking of Enterprise and Internet Citizens.',
    images: [
      {
        url: '/neitzen-og.png', 
        width: 1200,
        height: 630,
        alt: 'Neitzen - AGI Research and Data Infrastructure',
      },
    ],
  },

  // X (Formerly Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Neitzen | AGI Research & Assistive AI',
    description: 'Networking of Enterprise and Internet Citizens.',
    images: ['/neitzen-og.png'],
    //site: '@neitzen_tech', // Update with your actual handle if you have one
  },

  // EXTRA PROFESSIONAL TOUCHES
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 3. APP CATEGORY (Helps with mobile shares)
  appleWebApp: {
    title: 'Neitzen',
    statusBarStyle: 'default',
  },
};