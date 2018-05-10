import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/dev/incoming.module.css';
import animateStyles from '../../css/animate.module.css';

class Incoming extends React.Component {
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
      const slideInLeft = this.props.active ? animateStyles.slideInLeft : "";
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <div id={styles.desc} className={fadeIn}>
               <div id={styles.title}>
                  <svg viewBox="0 0 80 16"  preserveAspectRatio="xMidYMid meet">
                     <text x="42" y="12" textAnchor="middle" fill="white" >
                        Incoming!
                     </text>
                  </svg>
               </div>
               <div id={styles.github}>
                  <a href="https://github.com/jshwa/shipping-tracker" target="_blank">Github</a>
               </div>
               <div id={styles.blurb}>
                  Centralized tracking solution for shipments from multiple vendors using various shipping methods
               </div>
               <div id={styles.skills1}>
                  <span className={styles.skillBox}>Sinatra</span>
                  <span className={styles.skillBox}>Bootstrap</span>
                  <span className={styles.skillBox}>Ruby</span>
                  <span className={styles.skillBox}>BCrypt</span>
               </div>
            </div>
            <div id={styles.img} className={slideInLeft}>
               <Img
                  title="Incoming App"
                  alt="Incoming App: A tracking system for your packages"
                  sizes={this.props.incoming.sizes}
               />
            </div>
            <div id={styles.overlay} className={slideInLeft} onClick={this.vidOn}>
               <Img
                  title="Watch the Incoming App Demo"
                  alt="Play the Incoming App demo on YouTube"
                  sizes={this.props.incomingoverlay.sizes}
               />
            </div>
            { this.state.play &&
            <div id={styles.youtube_wrapper} onClick={this.vidOff}/>}
            { this.state.play &&
            <div id={styles.youtube}>
               <div className={styles.embed_container}>
                  <iframe 
                     src="https://www.youtube.com/embed/-GSodBuzSq0?rel=0&amp;showinfo=0&amp;autoplay=1" 
                     frameBorder="0" 
                     allow="autoplay; encrypted-media" 
                     allowfullscreen />
               </div>
            </div>}
            <div id={styles.strip} />
            <div id={styles.projectNo}>
               Project
               3 / 3
            </div>
         </div>
      )
   }
}

export default Incoming

