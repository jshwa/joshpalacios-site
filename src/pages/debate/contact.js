import React from 'react';
import Img from 'gatsby-image';
import styles from "../../css/debate/contact.module.css";
import animateStyles from "../../css/animate.module.css";

class Contact extends React.Component {
   render(){
      const slideInRight = this.props.active ? animateStyles.slideInRight : "";
      const slideInLeft = this.props.active ? animateStyles.slideInLeft : "";
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" textAnchor="middle" fill="#000">
                     CONTACT
                  </text>
               </svg>
            </div>
            <div id={styles.intouch} className={slideInLeft}>
               <svg viewBox="0 0 150 20" preserveAspectRatio="xMidYMid meet">
                  <text x="80" y="15" textAnchor="middle" fill="#000">
                     Want to get in touch?
                  </text>
               </svg>
            </div>
            <div id={styles.wechat} className={slideInRight}>
               <svg viewBox="0 0 150 20" preserveAspectRatio="xMidYMid meet">
                  <text x="70" y="15" textAnchor="middle" fill="#000">
                     Or add me on WeChat
                  </text>
               </svg>
            </div>
            <div id={styles.wechatimg} className={slideInLeft}>
               <Img
                  title="Add Josh on WeChat"
                  alt="Josh's WeChat ID: joshpalacios"
                  sizes={this.props.wechat.sizes}
               />
            </div>
            <div id={styles.emailbutton} className={fadeIn}>
               <a href="mailto:hey@joshpalacios.com">Email Me</a>
            </div>
         </div>
      )
   }
}

export default Contact