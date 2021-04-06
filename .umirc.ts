// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const name = 'action-tutorial';

export default defineConfig({
  title: 'Action Tutorial',
  mode: 'site',
  favicon: 'https://avatars1.githubusercontent.com/u/73879334?s=200&v=4',
  logo: 'https://avatars1.githubusercontent.com/u/73879334?s=200&v=4',
  exportStatic: {},
  ssr: {},
  outputPath: 'docs-dist',
  hash: true,
  base: `/${name}/`,
  publicPath: `/${name}/`,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  theme: {
    '@c-primary': '#1890ff',
  },
  navs: {
    'zh-CN': [
      { title: '介 绍', path: '/intro' },
      { title: '使 用', path: '/use' },
      { title: '开 发', path: '/dev' },
      { title: 'GitHub', path: 'https://github.com/actions-cool/action-tutorial' },
    ],
    'en-US': [
      { title: 'Introduction', path: '/en-US/intro' },
      { title: 'Usage', path: '/en-US/use' },
      { title: 'Development', path: '/en-US/dev' },
      { title: 'GitHub', path: 'https://github.com/actions-cool/action-tutorial' },
    ],
  },
});
