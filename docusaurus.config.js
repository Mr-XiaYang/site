const path = require("path");

const customFields = {
    navbar: {
        title: "夏阳",
    }, footer: {
        copyright: `Copyright © ${new Date().getFullYear()} 夏阳的个人站｜<a href='https://beian.miit.gov.cn/'>鲁ICP备20012782号</a>`,
    },
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "夏阳", tagline: "我是夏阳，一名兴趣使然的程序员",

    url: "https://www.xiayang.space", baseUrl: "/", favicon: "img/favicon.ico",

    trailingSlash: false,

    onBrokenLinks: "throw", onBrokenMarkdownLinks: "throw", onDuplicateRoutes: "throw",

    organizationName: "standout-jjc", // Usually your GitHub org/user name.
    projectName: "site", // Usually your repo name.

    customFields: customFields, themeConfig: {
        navbar: {
            title: customFields.navbar.title, logo: {
                alt: "XiaYang Logo", src: "img/logo.svg",
            }, items: [{
                to: "blog", label: "博客", position: "left"
            }, // {to: 'article/', activeBasePath: 'article', label: 'Docs', position: 'left'},
                {
                    href: "https://github.com/standout-jjc/xiayang-site", label: "GitHub", position: "right",
                },], hideOnScroll: true,
        }, footer: {
            links: [{
                title: "文档翻译", items: [{label: "《500 Lines or Less》", to: "500_Lines_or_Less"}],
            }, {
                title: "其他", items: [{label: "Blog", to: "blog"}, {
                    label: "GitHub", href: "https://github.com/standout-jjc/xiayang-site",
                }, {label: "Git个人镜像", href: "https://git.xiayang.space"},],
            },], copyright: customFields.footer.copyright,
        }, docs: {
            sidebar: {
                hideable: true
            }
        }, prism: {
            additionalLanguages: [],
        },
    }, presets: [["@docusaurus/preset-classic", {
        docs: false, blog: {
            showReadingTime: true, // Please change this to your repo.
            editUrl: "https://github.com/standout-jjc/xiayang-site/edit/main",
        }, theme: {
            customCss: require.resolve("./src/css/custom.css"),
        },
    },],], plugins: [["@docusaurus/plugin-content-article", {
        id: "docsDefault",
        path: path.resolve("./article", "default"),
        routeBasePath: "docs",
        sidebarPath: require.resolve(path.resolve("./article", "defaultSidebars.js")),
        editUrl: "https://github.com/standout-jjc/xiayang-site/edit/main",
    },], ["@docusaurus/plugin-content-article", {
        id: "docsFiveHundredLinesOrLess",
        path: path.resolve("./article", "500LinesOrLess"),
        routeBasePath: "500_Lines_or_Less",
        sidebarPath: require.resolve(path.resolve("./article", "500LinesOrLessSidebars.js")),
        editUrl: "https://github.com/standout-jjc/xiayang-site/edit/main",
    },], ["@docusaurus/plugin-sitemap", {
        id: "plugin-sitemap", changefreq: "daily", priority: 0.5
    },], [path.resolve(__dirname, "plugins/docusaurus-plugin-google-adsense"), {
        id: "plugin-google-adsense", adsense: {code: "ca-pub-2539504330450310"},
    }], ['@docusaurus/plugin-ideal-image', {
        quality: 70, max: 1030, min: 640, steps: 2, disableInDev: false,
    },], ['@docusaurus/plugin-google-gtag', {
        trackingID: 'G-ST49M7KECQ', anonymizeIP: true,
    },], ['@docusaurus/plugin-google-tag-manager', {
        containerId: 'GTM-PWXST29',
    },],],
};
