require("dotenv").config({
  path: `.env`
});

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Blog balance ton quoi`,
    description: `Kick off a great Gatsby blog with this starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Mik@el`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        //Default options are for WP sites hosted on wordpress.com
        //For sites self hosted and other options check:
        //https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress
        baseUrl: "www.balance-ton-quoi.yj.fr",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "http://blog-balance-ton-quoi",
        //   replacementUrl: "https://blog-balance-ton-quoi.netlify.com",
        // },
        verboseOutput: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/*/*/menus",
          "**/*/*/menu-locations",
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
        // auth: {
        //   //Create a file named .env in root folder of your project
        //   //And add there your clientId, clientSecret, WordPressUser and WordPressPassword
        //   //More info about environment variables: https://www.gatsbyjs.org/docs/environment-variables
        //   //More info about communicate with wordpress.com API: https://developer.wordpress.com/apps/
        //   // wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
        //   // wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        //   // wpcom_user: process.env.WORDPRESS_USER,
        //   // wpcom_pass: process.env.WORDPRESS_PASSWORD
        // },
        // searchAndReplaceContentUrls: {
        //   //Nested urls won't work. If you find a solution, please fill a PR request
        //   sourceUrl: "http://blog-balance-ton-quoi",
        //   replacementUrl: "https://gatsbystartercommunity.netlify.com"
        // }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-netlify` // make sure to put last in the array
  ]
};
