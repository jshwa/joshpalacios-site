import React from 'react';
import Img from 'gatsby-image';
import styles from "../../css/debate/contact.module.css"

class Contact extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" text-anchor="middle" fill="#181840">
                     CONTACT
                  </text>
               </svg>
            </div>
         </div>
      )
   }
}

export default Contact