import React from 'react';
import styles from "../../css/debate/contact.module.css";

class Contact extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="30 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" text-anchor="middle" fill="#181840">
                     CONTACT
                  </text>
               </svg>
            </div>
            <div id={styles.intouch}>
               <svg viewBox="70 0 150 20" preserveAspectRatio="xMidYMid meet">
                  <text x="80" y="15" text-anchor="middle" fill="#181840">
                     Want to get in touch?
                  </text>
               </svg>
            </div>
            <div id={styles.wechat}>
               <svg viewBox="65 0 150 20" preserveAspectRatio="xMidYMid meet">
                  <text x="70" y="15" text-anchor="middle" fill="#181840">
                     Or add me on WeChat
                  </text>
               </svg>
            </div>
            <div id={styles.wechatimg}>
               {this.props.wechat}
            </div>
            <div id={styles.emailbutton}>
               <a href="mailto:hey@joshpalacios.com">Email Me</a>
            </div>
         </div>
      )
   }
}

export default Contact