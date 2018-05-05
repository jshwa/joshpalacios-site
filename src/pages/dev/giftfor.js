import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/dev/giftfor.module.css';

class Giftfor extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         play: false,
      };
   }  

   vidOn = () => {
      this.setState({
         play: true,
      });
   }

   vidOff = () => {
      this.setState({
         play: false,
      })
   }

   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.desc}>
               <div id={styles.title}>
                  <svg viewBox="0 0 80 16"  preserveAspectRatio="xMidYMid meet">
                     <text x="39" y="15" textAnchor="middle" fill="white" >
                        Gift For
                     </text>
                  </svg>
               </div>
               <div id={styles.github}>
                  <a href="https://github.com/jshwa/wishlist" target="_blank">Github</a>
               </div>
               <div id={styles.blurb}>
                  A Ruby on Rails web app to cultivate crowd-sourced gift guides  
               </div>
               <div id={styles.skills1}>
                  <span className={styles.skillBox}>Ruby</span>
                  <span className={styles.skillBox}>JS</span>
                  <span className={styles.skillBox}>Rails</span>
                  <span className={styles.skillBox}>JQuery</span>
               </div>
               <div id={styles.skills2}>
                  <span className={styles.skillBox}>SQL</span>
                  <span className={styles.skillBox}>OAuth</span>
                  <span className={`${styles.skillBox} ${styles.blank}`}></span>
                  <span className={`${styles.skillBox} ${styles.blank}`}></span>
               </div>
            </div>
            <div id={styles.img}>
               {this.props.giftfor}
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               {this.props.giftforoverlay}
            </div>
            { this.state.play &&
            <div id={styles.youtube_wrapper} onClick={this.vidOff}/>}
            { this.state.play &&
            <div id={styles.youtube}>
               <div className={styles.embed_container}>
                  <iframe 
                     src="https://www.youtube.com/embed/dEAa7JyfQ60?rel=0&amp;showinfo=0&amp;autoplay=1" 
                     frameBorder="0" 
                     allow="autoplay; encrypted-media" 
                     allowfullscreen />
               </div>
            </div>}
            <div id={styles.strip} />
         </div>
      )
   }
}

export default Giftfor

