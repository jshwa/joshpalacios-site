import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from '../../css/debate/about.module.css';

class DebateAbout extends React.Component {
   constructor (props) {
      super(props);
   }

   render() {
      return (
         <div id={styles.wrapper}>
            <div id={styles.bgimg}>
               <Img sizes={this.props.data.shanghai.sizes} />
            </div>
            <div id={styles.name}>
               <span class={styles.firstname}>Josh</span>
               <span class={styles.lastname}>Palacios</span>
            </div>
            <div id={styles.desc}>
               Lorem ipsum dolor amet coloring book vape normcore pickled, green juice edison bulb mumblecore farm-to-table before they sold out meh chicharrones yuccie sartorial chambray paleo. Biodiesel chia craft beer, microdosing la croix poke yr shoreditch before they sold out. Flexitarian palo santo tumblr gluten-free, salvia ugh raclette woke chambray stumptown try-hard. 
            </div>
         </div>
      )
   }
}

export default DebateAbout

export const query = graphql`
  query aboutImageQuery {
    shanghai: imageSharp(id: { regex: "/Shanghai.jpeg/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;