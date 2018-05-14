import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from "../../css/debate/speaking.module.css"
import animateStyles from "../../css/animate.module.css"

class Speaking extends React.Component {
   render(){
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <Helmet
               title="Speaking"
               meta={[
                  { name: "description", content: "Josh Palacios enjoys speaking to groups about education, debate, and technology." },
               ]}
            />
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" textAnchor="middle" fill="#000">
                     SPEAKING
                  </text>
               </svg>
            </div>
            <div id={styles.blurb} className={fadeIn}>
               In the last 6 years I’ve had the opportunity to share my ideas and passions with crowds across China. I’ve spoken at events ranging from smaller, student organized seminars to the full auditoriums of the Shanghai Regional and China National tournaments. I jump at the chance to reach more people at once with a larger crowd, but a smaller, interactive, intimate group will be more engaging and exciting every time. I’d love to come speak to your group.
            </div>
            <div id={styles.onstage} className={fadeIn}>
               {this.props.onStage && <Img
                  title="Josh Speaking at a Tournament"
                  alt="Delivering the Opening at the Shanghai Regional"
                  sizes={this.props.onStage.sizes}
                  style={{height: '100vh'}} 
               />}
            </div>
            <div id={styles.button} className={fadeIn}>
               <Link to="/debate/contact">Request a Seminar</Link>
            </div>
         </div>
      )
   }
}

export default Speaking