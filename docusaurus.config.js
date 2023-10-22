// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '雪绘Botの使用文档',
  tagline: '开始你的Orzmic查分之旅吧！',
  favicon: 'img/Yukie.ico',

  // Set the production url of your site here
  url: 'https://YukieBot.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YukieBot', // Usually your GitHub org/user name.
  projectName: 'YukieBot.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/title.jpg',
      navbar: {
        title: '雪绘Botの使用文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Yukie.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Start',
          },

          {
            href: 'https://github.com/YukieBot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '关于我们',
                to: '/docs/intro',
              },
              {
                label: '使用说明',
                to: '/docs/help',
              },
              
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Orzmic官方的哔哩哔哩主页',
                href: 'https://space.bilibili.com/516654019',
              },
              {
                label: 'Orzmic下载-好游快爆(推荐)',
                href: 'https://www.3839.com/a/131304.htm',
              },
              {
                label: 'Orzmic下载-Konmai音游下载站616sb',
                href: 'https://616.sb/#O',
              }


            ],
          },
          {
            title: '更多',
            items: [

              {
                label: '我们的频道',
                href: 'https://pd.qq.com/s/dyvq3ldez',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Orzmic查分团队`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
