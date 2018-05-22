import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styles from '../../css/dev/giftfor.module.css';
import animateStyles from '../../css/animate.module.css';

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
      const slideInLeft = this.props.active ? animateStyles.slideInLeft : "";
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <div id={styles.desc} className={fadeIn}>
               <div id={styles.title}>
                  <svg viewBox="0 0 80 16"  preserveAspectRatio="xMidYMid meet">
                     <text x="39" y="15" textAnchor="middle" fill="white" >
                        Gift For
                     </text>
                  </svg>
               </div>
               <div id={styles.github}>
                  <span>
                     <a href="https://github.com/jshwa/wishlist" target="_blank">Github</a> 
                     &nbsp;|&nbsp;
                     <a href="#" onClick={this.vidOn}>Demo</a>
                  </span>
               </div>
               <div id={styles.blurb}>
                  A Ruby on Rails web app with Facebook Authentication designed to cultivate crowd-sourced gift guides using the Amazon API. 
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
            <div id={styles.img} className={fadeIn}>
            {this.props.giftfor && <Img
                  title="GiftFor App"
                  alt="The GiftFor App: Crowd-sourced gift guides"
                  sizes={this.props.giftfor.sizes}
               />}
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               {this.props.giftforoverlay && <Img
                  title="Watch the Demo"
                  alt="Play the Demo on YouTube"
                  sizes={this.props.giftforoverlay.sizes}
               />}
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
                     allowFullScreen />
               </div>
            </div>}
            <div id={styles.strip} />
            <div id={styles.projectNo}>
               Project
               2 / 3
            </div>
         </div>
      )
   }
}

export default Giftfor

