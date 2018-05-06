import React from 'react';
import styles from '../../css/dev/blog.module.css';

class Blog extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.main} />
            <div id={styles.poly} />
            <div id={styles.sidebar} />
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

export default Blog