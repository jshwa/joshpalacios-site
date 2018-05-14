import React from 'react';
import Helmet from 'react-helmet';
import styles from '../../css/dev/contact.module.css';
import animateStyles from '../../css/animate.module.css';

class DevContact extends React.Component {
   render(){
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <Helmet
               title="Josh Palacios | Full Stack Web Developer"
               meta={[
                  { name: "description", content: "Josh Palacios is a web developer focused on using JavaScript and Ruby to create the best user experience possible." },
               ]}
            />          
            <div id={styles.contact}>
               <svg viewBox="0 0 62 16" preserveAspectRatio="xMinYMin meet">
                  <text x="62" y="15" textAnchor="end" fill="#121212">
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