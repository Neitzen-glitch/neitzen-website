import type { Metadata } from 'next';

export const neitzenMetadata: Metadata = {
  metadataBase: new URL('https://neitzen.tech'),
  title: {
    default: 'Neitzen | AGI Research & Assistive AI Technologies',
    template: '%s | Neitzen'
  },
  description: 'Neitzen is a global technology company specializing in AGI research, high-fidelity data synthesis for model training, and assistive software solutions.',
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
    url: 'https://neitzen.tech',
    siteName: 'Neitzen',
    title: 'Neitzen | Pioneering Assistive Intelligence & AGI',
    description: 'Developing the data infrastructure and assistive software leveraging the power of AI and the internet.',
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
    description: 'Building assistive technologies and AGI research infrastructure.',
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
};