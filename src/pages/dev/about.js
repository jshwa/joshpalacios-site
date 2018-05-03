import React from 'react';
import styles from '../../css/dev/about.module.css';

class Portfolio extends React.Component {
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.name}>
               <svg viewBox="0 0 115 16"  preserveAspectRatio="xMinYMin meet">
                  <text x="115" y="15" text-anchor="end" >
                     <tspan style="font-family: 'HelveticaNeue-Light'">Joshua</tspan>
                     <tspan style="font-family: 'HelveticaNeue-Bold'">Palacios</tspan>
                  </text>
               </svg>
            </div>
            <div id={styles.title}>
               <svg viewBox="0 0 80 16"  preserveAspectRatio="xMinYMin meet">
                  <text x="0" y="15" fill="white" >
                     <tspan>ABOUT</tspan>
                  </text>
               </svg>
            </div>
            <div id={styles.about}>
               Lorem ipsum dolor amet coloring book vape normcore pickled, green juice edison bulb mumblecore farm-to-table before they sold out meh chicharrones yuccie sartorial chambray paleo. Biodiesel chia craft beer, microdosing la croix poke yr shoreditch before they sold out. Flexitarian palo santo tumblr gluten-free, salvia ugh raclette woke chambray stumptown try-hard. 
            </div>
         </div>
      )
   }
}

export default Portfolio