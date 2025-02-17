/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// const withMdxEnhanced = require("next-mdx-enhanced");
// const rehypePrism = require("@mapbox/rehype-prism");
// const remarkPrism = require("remark-prism");

// const { getOG } = require("./lib/getPost.tsx");

// const mdx = withMdxEnhanced({
//   defaultLayout: "layouts",
//   fileExtensions: ["mdx", "md"],
//   rehypePlugins: [],
//   // extendFrontMatter: {
//   //   process: (mdxContent, frontMatter) => {},
//   //   phase: "prebuild|loader|both",
//   // },
// });

const redirects = async () => [
  {
    source: "/chrome",
    destination:
      "https://chrome.google.com/webstore/detail/notion-boost/eciepnnimnjaojlkcpdpcgbfkpcagahd",
    permanent: true,
  },

  {
    source: "/firefox",
    destination: "https://addons.mozilla.org/en-US/firefox/addon/notion-boost/",
    permanent: true,
  },
];

module.exports =
  //  withMdxEnhanced({
  //   layoutPath: "layouts", // layout folder
  //   defaultLayout: true, // set layouts/index.tsx as default for mdx file lacking frontmatter 'layout'
  //   fileExtensions: ["mdx", "md"],
  //   remarkPlugins: [
  //     // require("remark-autolink-headings"),
  //     // require("remark-slug"),
  //     require("remark-code-titles"),
  //   ],
  //   rehypePlugins: [
  //     // needed both to add self-linking id to headings href
  //     require("rehype-slug"),
  //     require("rehype-autolink-headings"),
  //     rehypePrism,
  //   ],
  //   usesSrc: false, // checks for /pages folder
  //   // extendFrontMatter: {
  //   //   process: (mdxContent, frontMatter) => {
  //   //     const t = "dfd";
  //   //     return { tt: t };
  //   //   },
  //   //   // phase: "prebuild|loader|both",
  //   // },
  //   reExportDataFetching: false,
  // })
  // NextConfig
  {
    // webpack5: false,

    // disabling i18n due to mdx path error
    // i18n: {
    //   locales: ["en-US"],
    //   defaultLocale: "en-US",
    // },
    future: {
      // webpack5: true,
      strictPostcssConfiguration: true,
    },
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    webpack: (config, { dev, isServer }, options) => {
      // if (isServer) {
      //   if (!dev) {
      //     require("./scripts/generate-sitemap.js");
      //     require("./scripts/generate-rss.js");
      //   }
      // }

      // config.module.rules.push({
      //   test: /\.(png|jpe?g|gif|mp4|svg)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         publicPath: "/_next",
      //         // name: "static/media/[name].[hash].[ext]",
      //         // todo: remove redundant `pages` path from [path] https://github.com/webpack-contrib/file-loader#function-1
      //         name: "static/media/[path][name].[ext]",
      //       },
      //     },
      //   ],
      // });

      return config;
    },
    redirects,
  };
