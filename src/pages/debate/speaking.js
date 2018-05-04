import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styles from "../../css/debate/speaking.module.css"

class Speaking extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" text-anchor="middle" fill="#000">
                     SPEAKING
                  </text>
               </svg>
            </div>
            <div id={styles.blurb}>
               Lorem ipsum dolor amet coloring book vape normcore pickled, green juice edison bulb mumblecore farm-to-table before they sold out meh chicharrones yuccie sartorial chambray paleo. Biodiesel chia craft beer, microdosing la croix poke yr shoreditch before they sold out. Flexitarian palo santo tumblr gluten-free, salvia ugh raclette woke chambray stumptown try-hard.             </div>
            <div id={styles.onstage}>
               <Img sizes={this.props.data.onStage.sizes} imgStyle={{height: '100vh'}} />
            </div>
            <div id={styles.button}>
               <Link to="/debate/contact">Request a Seminar</Link>
            </div>
         </div>
      )
   }
}

export default Speaking

export const query = graphql`
  query speakingImageQuery {
    onStage: imageSharp(id: { regex: "/onstage.jpg/"}) {
      sizes(maxHeight: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
  }
`;