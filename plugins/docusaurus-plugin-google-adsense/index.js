module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {adsense} = themeConfig || {};

  if (!adsense) {
    throw new Error(
      `You need to specify 'adsense' object in 'themeConfig' with 'code' field in it to use docusaurus-plugin-google-adsense`,
    );
  }

  const {code} = adsense;

  if (!code) {
    throw new Error(
      'You specified the `adsense` object in `themeConfig` but the `code` field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-google-adsense',

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              'data-ad-client': code,
              src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`,
            },
          }
        ],
      };
    },
  };
};
