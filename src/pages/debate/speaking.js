import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styles from "../../css/debate/speaking.module.css"

class Speaking extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" textAnchor="middle" fill="#000">
                     SPEAKING
                  </text>
               </svg>
            </div>
            <div id={styles.blurb}>
               In the last 6 years I’ve had the opportunity to share my ideas and passions with crowds across China. I’ve spoken at events ranging from smaller, student organized seminars to the full auditoriums of the Shanghai Regional and China National tournaments. I jump at the chance to reach more people at once with a larger crowd, but a smaller, interactive, intimate group will be more engaging and exciting every time. I’d love to come speak to your group.
            </div>
            <div id={styles.onstage}>
               <Img
                  title="Josh Speaking at a Tournament"
                  alt="Delivering the Opening at the Shanghai Regional"
                  sizes={this.props.onStage.sizes}
                  imgStyle={{height: '100vh'}} 
               />
            </div>
            <div id={styles.button}>
               <Link to="/debate/contact">Request a Seminar</Link>
            </div>
         </div>
      )
   }
}

export default Speaking