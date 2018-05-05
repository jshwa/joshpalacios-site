import React from 'react';
import {Link, navigateTo} from 'gatsby-link';
import styles from "../../css/debate/about.module.css";
import Img from 'gatsby-image';

class DebateAbout extends React.Component {
   render() {
      return (
         <div id={styles.wrapper} >
            <div id={styles.bgimg}>
               <Img
                  title="Shanghai"
                  alt="The Three Sisters of Shanghai"
                  sizes={this.props.shanghai.sizes}
               />
            </div>
            <div id={styles.name}>
               <div id={styles.headshot}>
                  <Img
                     title="Josh Palacios"
                     alt="Josh Palacios"
                     sizes={this.props.joshcircle.sizes}
                  />
               </div>
               <span className={styles.firstname}>Josh</span>
               <span className={styles.lastname}>Palacios</span>
            </div>
            <div id={styles.desc}>
               Lorem ipsum dolor amet coloring book vape normcore pickled, green juice edison bulb mumblecore farm-to-table before they sold out meh chicharrones yuccie sartorial chambray paleo. Biodiesel chia craft beer, microdosing la croix poke yr shoreditch before they sold out. Flexitarian palo santo tumblr gluten-free, salvia ugh raclette woke chambray stumptown try-hard. 
            </div>
         </div>
      )
   }
}

export default DebateAbout