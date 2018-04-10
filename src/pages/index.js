import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from '../css/index.module.css';
import '../css/index.css';

const IndexPage = props => (
  <div class={styles.wrapper}>
    <div class={styles.img}>
     <Img sizes={props.data.josh.sizes} />
    </div>
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