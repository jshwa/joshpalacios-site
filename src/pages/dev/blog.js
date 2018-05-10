import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/dev/blog.module.css';
import animateStyles from '../../css/animate.module.css';

class Blog extends React.Component {
   render(){
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg width="100%" height="100%" viewBox="0 0 40 19"  preserveAspectRatio="xMidYMid meet">
                  <text x="20" y="14" textAnchor="middle" fill="#121212" >
                     Blog
                  </text>
               </svg>
            </div>
            <div id={styles.subtitle}>
               <svg viewBox="0 0 175 16"  preserveAspectRatio="xMidYMid meet">
                  <text x="0" y="12" textAnchor="start" fill="#121212" >
                     What I'm reading now:
                  </text>
               </svg>
            </div>
            <div id={styles.blog1} className={fadeIn}>
               <div className={styles.blogImg}>
                  <a href="https://pudding.cool/2017/03/music-history/" target="_blank">
                     <Img
                        title="How Music Taste Evolved"
                        alt="How Music Taste Evolved"
                        sizes={this.props.pudding.sizes}
                     />
                  </a>
               </div>
               <div className={styles.blogTitle}>
                  <a href="https://pudding.cool/2017/03/music-history/" target="_blank">How Music Taste Evolved</a>
               </div>
               <div className={styles.blogSource}>
                  <a href="https://pudding.cool" target="_blank">THE PUDDING</a>
               </div>
            </div>
            <div id={styles.blog2} className={fadeIn}>
               <div className={styles.blogImg}>
                  <a href="https://waitbutwhy.com/2018/04/picking-career.html" target="_blank">
                     <Img
                        title="How to Pick a Career by Tim Urban"
                        alt="How to Pick a Career by Tim Urban"
                        sizes={this.props.urban.sizes}
                     />
                  </a>
               </div>
               <div className={styles.blogTitle}>
                  <a href="https://waitbutwhy.com/2018/04/picking-career.html" target="_blank">How to Pick a Career by Tim Urban</a>
               </div>
               <div className={styles.blogSource}>
                  <a href="https://waitbutwhy.com/" target="_blank">WAIT BUT WHY</a>
               </div>
            </div>
            <div id={styles.blog3} className={fadeIn}>
               <div className={styles.blogImg}>
                  <a href="https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5" target="_blank">
                     <Img
                        title="I’m harvesting credit card numbers by David Gilbertson"
                        alt="I’m harvesting credit card numbers by David Gilbertson"
                        sizes={this.props.gilbertson.sizes}
                     />
                  </a>
               </div>
               <div className={styles.blogTitle}>
                  <a href="https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5" target="_blank">I’m harvesting credit card numbers by David Gilbertson</a>
               </div>
               <div className={styles.blogSource}>
                  <a href="https://hackernoon.com/" target="_blank">HACKERNOON</a>
               </div>
            </div>
         </div>
      )
   }
}

export default Blog