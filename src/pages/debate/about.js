import React from 'react';
import styles from "../../css/debate/about.module.css";
import Img from 'gatsby-image';
import animateStyles from '../../css/animate.module.css'

class DebateAbout extends React.Component {
   render() {
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";
      return (
         <div id={styles.wrapper}>
            <div id={styles.bgimg}>
               <Img
                  title="Shanghai"
                  alt="The Three Sisters of Shanghai"
                  sizes={this.props.shanghai.sizes}
                  className={styles.imageWrapper}
               />
            </div>
            <div id={styles.name}>
               <div id={styles.headshot} className={fadeIn}>
                  <Img
                     title="Josh Palacios"
                     alt="Josh Palacios"
                     sizes={this.props.joshcircle.sizes}
                  />
               </div>
               <span className={styles.firstname}>Josh</span>
               <span className={styles.lastname}>Palacios</span>
            </div>
            <div id={styles.desc} className={fadeIn}>
            I love building new things. In the nearly 15 years I’ve been debating and coaching debate, I’ve been fortunate to help build new debate programs both at home and abroad. In 2012 I moved to Shanghai as one of the founding coaches of the National Speech and Debate Association in China. Since then I’ve cultivated the growth of debate in China to over 100 tournaments yearly, with tens of thousands of debaters competing across the country. 
            </div>
         </div>
      )
   }
}

export default DebateAbout