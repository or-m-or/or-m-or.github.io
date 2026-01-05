import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://or-m-or.github.io',
  title: "ormor's archive",
  titleTemplate: '%s',
  description: 'A personal archive of TAE HWAN’s development notes',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
  // analytics: {
  //   provider: 'umami',
  //   websiteId: 'your-umami-website-id',
  // },
  bio: {
    name: 'HEO TAE HWAN',
    avatar: '/avatar.avif',
    description:
      `게임 서버 개발자를 꿈꾸는 학생입니다. \n 학습하며 이해하고 고민한 내용을 여기에 남겨보려 합니다.`,
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
