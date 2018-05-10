import React from 'react';
import styles from '../../css/dev/contact.module.css';
import animateStyles from '../../css/animate.module.css';

class DevContact extends React.Component {
   render(){
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>          
            <div id={styles.contact}>
               <svg viewBox="0 0 80 16" preserveAspectRatio="xMinYMin meet">
                  <text x="80" y="15" textAnchor="end" fill="#121212">
                    Contact
                  </text>
               </svg>
            </div>
            <div id={styles.button} className={fadeIn}>
               <a href="mailto:hey@joshpalacios.com">Email Me.</a>
            </div>
         </div>
      )
   }
}

export default DevContact