import { NextRequest, NextResponse } from 'next/server';

const searchDatabase = [
  {
    title: 'AIDA',
    description: 'Business OS - The intelligent operating system that unifies your entire business',
    path: '/aida-os',
    type: 'page' as const,
    keywords: ['aida', 'business', 'os', 'operating system', 'unified']
  },
  {
    title: 'Neon AI',
    description: 'AI Intelligence - Advanced artificial intelligence for predictive analytics',
    path: '/#products',
    type: 'feature' as const,
    keywords: ['neon', 'ai', 'artificial intelligence', 'predictive', 'analytics']
  },
  {
    title: 'Data Bank',
    description: 'Data Center - Enterprise-grade distributed data infrastructure',
    path: '/#products',
    type: 'feature' as const,
    keywords: ['data', 'bank', 'center', 'infrastructure', 'enterprise']
  },
  {
    title: 'Kree',
    description: 'Game & Entertainment - Complete game development platform',
    path: '/#products',
    type: 'feature' as const,
    keywords: ['kree', 'game', 'entertainment', 'development', 'platform']
  },
  {
    title: 'Home',
    description: 'Welcome to Neitzen - The Ultimate Business Solutions',
    path: '/',
    type: 'page' as const,
    keywords: ['home', 'neitzen', 'welcome', 'business', 'solutions']
  },
  {
    title: 'Online Presence',
    description: 'Establish your online presence with integrated web solutions',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['online', 'presence', 'web', 'digital', 'internet']
  },
  {
    title: 'Operations Management',
    description: 'Streamline your business operations with intelligent automation',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['operations', 'management', 'automation', 'workflow', 'business']
  },
  {
    title: 'Autonomous Marketing',
    description: 'AI-powered marketing automation that scales with your business',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['marketing', 'autonomous', 'automation', 'ai', 'campaigns']
  },
  {
    title: 'Business Intelligence',
    description: 'Advanced analytics and insights for data-driven decisions',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['business', 'intelligence', 'analytics', 'insights', 'data']
  },
  {
    title: 'Dashboard',
    description: 'Access your personal dashboard and manage your account',
    path: '/dashboard',
    type: 'page' as const,
    keywords: ['dashboard', 'account', 'manage', 'profile', 'settings']
  },
  {
    title: 'Features',
    description: 'Explore the features section',
    path: '/#features',
    type: 'section' as const,
    keywords: ['features', 'capabilities', 'functions', 'tools']
  },
  {
    title: 'Products',
    description: 'View all our products',
    path: '/#products',
    type: 'section' as const,
    keywords: ['products', 'all', 'our']
  },
  {
    title: 'Integration',
    description: 'Integrate Neitzen with your existing tools and workflows',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['integration', 'integrate', 'tools', 'workflow', 'connect']
  },
  {
    title: 'Security',
    description: 'Enterprise-grade security and compliance features',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['security', 'secure', 'compliance', 'enterprise', 'protection']
  },
  {
    title: 'Analytics',
    description: 'Real-time analytics and reporting',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['analytics', 'reporting', 'data', 'insights', 'real-time']
  },
  {
    title: 'Collaboration',
    description: 'Team collaboration and communication tools',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['collaboration', 'team', 'communication', 'together', 'work']
  },
  {
    title: 'API',
    description: 'Powerful API for developers and integrations',
    path: '/aida-os',
    type: 'feature' as const,
    keywords: ['api', 'developer', 'integration', 'code', 'technical']
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q')?.toLowerCase().trim();

  if (!query || query.length < 1) {
    return NextResponse.json({ results: [] });
  }

  // Search through the database
  const results = searchDatabase
    .filter((item) => {
      const searchText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
      return searchText.includes(query);
    })
    .map((item) => ({
      title: item.title,
      description: item.description,
      path: item.path,
      type: item.type
    }))
    .slice(0, 8); // Limit to 8 results

  return NextResponse.json({ results });
}
