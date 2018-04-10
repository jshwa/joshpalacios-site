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
     'gatsby-plugin-react-helmet',
     'gatsby-plugin-preact',
     'gatsby-transformer-sharp',
     'gatsby-plugin-sharp',
   ],
};
