module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
     {
      resolve: `gatsby-source-filesystem`,
      options: {
         name: `img`,
         path: `${__dirname}/src/img/`
      }
     },
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
         name: "JoshPalacios",
         short_name: "Josh",
         start_url: "/",
         background_color: "#FFF",
         theme_color: "#121212",
         display: "standalone",
         icon: "src/img/favicon.png",
      }
    },
     'gatsby-plugin-react-helmet',
     'gatsby-transformer-sharp',
     'gatsby-plugin-sharp',
     'gatsby-plugin-offline',
   ],
};
