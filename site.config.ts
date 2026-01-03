import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://or-m-or.github.io',
  title: '허태환 · ormor',
  titleTemplate: '%s',
  description: 'minimalism coding blog build with astro',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
  // analytics: {
  //   provider: 'umami',
  //   websiteId: 'your-umami-website-id',
  // },
  bio: {
    name: 'HEO TAE HWAN',
    avatar: '/avatar.avif',
    description: 'your long description',
    links: [
      {
        label: 'mail',
        url: 'mailto:hth815@naver.com',
      },
      {
        label: 'github',
        url: 'https://github.com/or-m-or',
      },
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/ormor',
      },
    ],
  },
  // @see https://giscus.app/
  giscus: {
    repo: 'or-m-or/or-m-or.github.io',
    // change this to your repo id
    repoId: 'R_kgDOQy2OyA',
  },
};

export default config;
