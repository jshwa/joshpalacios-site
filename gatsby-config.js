module.exports = {
  siteMetadata: {
    title: 'Josh Palacios | Full Stack Web Developer / Debate Coach',
    siteUrl: `https://joshpalacios.com`,
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
         icon: "src/img/favicons/favicon.png",
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
         output: `/sitemap.xml`,
      }
    },
     'gatsby-plugin-react-helmet',
     'gatsby-transformer-sharp',
     'gatsby-plugin-sharp',
     'gatsby-plugin-offline',
   ],
};
