import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://or-m-or.github.io',
  title: "태환이네 서고",
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
      `게임 서버 프로그래머를 꿈꾸는 태환이의 서고에 오신 것을 환영합니다.\n이곳은 제가 겪은 것을 남기고, 톺아본 지식을 쌓아서, 만든 것을 기록하는 공간입니다.`,
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
    repoId: 'R_kgDOQy2OyA',
    category: 'Announcements',
    categoryId: 'DIC_kwDOQy2Oyc4Cog_Q',
    mapping: 'pathname',
    strict: false,
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    lang: 'ko',
  },
};

export default config;
