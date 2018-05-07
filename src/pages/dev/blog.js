import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/dev/blog.module.css';

class Blog extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg width="100%" height="100%" viewBox="0 0 50 19"  preserveAspectRatio="xMidYMid meet">
                  <text x="25" y="14" textAnchor="middle" fill="#121212" >
                     Blog
                  </text>
               </svg>
            </div>
            <div id={styles.sidebar} />
            <div id={styles.subtitle}>
               <svg viewBox="0 0 180 16"  preserveAspectRatio="xMidYMid meet">
                  <text x="90" y="12" textAnchor="middle" fill="#121212" >
                     What I'm reading now:
                  </text>
               </svg>
            </div>
            <div id={styles.blog1}>
            </div>
            <div id={styles.blog2}>
            </div>
            <div id={styles.blog3}>
            </div>
         </div>
      )
   }
}

export default Blog