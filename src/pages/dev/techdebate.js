import React from 'react';
import styles from '../../css/dev/techdebate.module.css';

class TechDebate extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.main} />
            <div id={styles.poly} />
            <div id={styles.sidebar} />
            <div id={styles.tech}>
               <svg viewBox="0 0 33 16" preserveAspectRatio="xMinYMin meet">
                  <text x="2" y="15" textAnchor="start" fill="#000" >
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
            <div id={styles.img}>

            </div>
            <div id={styles.desc}>
               Lorem ipsum dolor amet coloring book vape normcore pickled, green juice edison bulb mumblecore farm-to-table before they sold out meh chicharrones yuccie sartorial chambray paleo. Biodiesel chia craft beer, microdosing la croix poke yr shoreditch before they sold out. Flexitarian palo santo tumblr gluten-free, salvia ugh raclette woke chambray stumptown try-hard. 
            </div>
            <div id={styles.bottomcorner} />
         </div>
      )
   }
}

export default TechDebate