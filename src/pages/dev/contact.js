import React from 'react';
import styles from '../../css/dev/contact.module.css';

class DevContact extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>          
            <div id={styles.contact}>
               <svg viewBox="0 0 80 16" preserveAspectRatio="xMinYMin meet">
                  <text x="80" y="15" textAnchor="end" fill="#121212">
                    Contact
                  </text>
               </svg>
            </div>
            <div id={styles.button}>
               <a href="mailto:hey@joshpalacios.com">Email Me.</a>
            </div>
         </div>
      )
   }
}

export default DevContact