/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '夏阳',
  tagline: '我是夏阳，一名兴趣使然的程序员',

  url: 'https://blog.xiayang.space',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  organizationName: 'standout-jjc', // Usually your GitHub org/user name.
  projectName: 'xiayang-blog', // Usually your repo name.

  themeConfig: {
    navbar: {
      title: '夏阳',
      logo: {
        alt: 'XiaYang Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'blog', label: '博客', position: 'left'},
        // {to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left'},
        {href: 'https://github.com/standout-jjc/xiayang-blog', label: 'GitHub', position: 'right'},
      ],
      hideOnScroll: true
    },
    footer: {
      links: [{
          title: 'More',
          items: [
            {label: 'Blog', to: 'blog'},
            {label: 'GitHub', href: 'https://github.com/standout-jjc/xiayang-blog'},
            {label: 'Git个人镜像', href: 'https://git.xiayang.space'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 夏阳的个人站 ｜ 鲁ICP备20012782号`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/standout-jjc/xiayang-blog/edit/main',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/standout-jjc/xiayang-blog/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
