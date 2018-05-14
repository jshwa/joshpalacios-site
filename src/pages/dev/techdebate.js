import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styles from '../../css/dev/techdebate.module.css';
import animateStyles from '../../css/animate.module.css';

class TechDebate extends React.Component {
   render(){
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";
      const slideInAngle= this.props.active ? animateStyles.slideInAngle : "";
      
      return(
         <div id={styles.wrapper}>
            <Helmet
               title="Tech and Debate"
               meta={[
                  { name: "description", content: "Josh uses technology to effect positive change in debate." },
               ]}
            />
            <div id={styles.main} />
            <div id={styles.poly} className={slideInAngle}>
               {this.props.debatetech && <Img
                  title="Tech and Debate"
                  alt="Competitive Debate is beginning to make use of modern technology"
                  sizes={this.props.debatetech.sizes}
               />}
            </div>
            <div id={styles.tech}>
               <svg viewBox="0 0 33 16" preserveAspectRatio="xMinYMin meet">
                  <text x="2" y="15" textAnchor="start" fill="#181840" >
                     Tech
                  </text>
               </svg>
            </div>            
            <div id={styles.debate}>
               <svg viewBox="0 0 67 16" preserveAspectRatio="xMinYMin meet">
                  <text x="2" y="15" textAnchor="start" fill="#FFF">
                    &amp; Debate
                  </text>
               </svg>
            </div>
            <div id={styles.techdebate}>
               <svg viewBox="0 0 95 16" preserveAspectRatio="xMinYMin meet">
                  <text x="2" y="15" textAnchor="start" fill="#FFF">
                    Tech &amp; Debate
                  </text>
               </svg>
            </div>
            <div id={styles.desc} className={fadeIn}>
            I believe that tech, at its best, makes things faster, easier, and more efficient, and it’s been doing that in debate for some time, albeit slowly (ironically). Web apps are making it easier to run large tournaments (like those spread over multiple campuses, days and events) with a smaller staff making debate more accessible for students everywhere.
            </div>
         </div>
      )
   }
}

export default TechDebate