import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const IndexPage = (props) => (
  <div>
     <Img sizes={props.data.josh.sizes} />
  </div>
)

export default IndexPage

export const query = graphql`
  query GatsbyImageQuery {
    josh: imageSharp(id: { regex: "/JoshLogoCircle.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
   }
`;