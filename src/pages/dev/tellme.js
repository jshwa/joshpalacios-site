import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/dev/tellme.module.css';

class Tellme extends React.Component {
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
                  <svg viewBox="0 0 80 32"  preserveAspectRatio="xMidYMid meet">
                     <text x="39" y="15" textAnchor="middle" fill="white" >
                        Tell Me
                     </text>
                     <text x="39" y="30" textAnchor="middle" fill="white" >
                        About It
                     </text>
                  </svg>
               </div>
               <div id={styles.github}>
                  <a href="https://github.com/jshwa/tell-me-about-it" target="_blank">Github</a>
               </div>
               <div id={styles.blurb}>
                  Momentum-style React/Redux homepage app with Rails API back-end for encouraging blogging habit formation               </div>
               <div id={styles.skills1}>
                  <span className={styles.skillBox}>JS</span>
                  <span className={styles.skillBox}>React</span>
                  <span className={styles.skillBox}>Redux</span>
                  <span className={styles.skillBox}>Ruby</span>
               </div>
               <div id={styles.skills2}>
                  <span className={styles.skillBox}>Rails</span>
                  <span className={styles.skillBox}>JSON</span>
                  <span className={`${styles.skillBox} ${styles.blank}`}></span>
                  <span className={`${styles.skillBox} ${styles.blank}`}></span>
               </div>
            </div>
            <div id={styles.img}>
               {this.props.tellme}
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               {this.props.tellmeoverlay}
            </div>
            { this.state.play &&
            <div id={styles.youtube_wrapper} onClick={this.vidOff}/>}
            { this.state.play &&
            <div id={styles.youtube}>
               <div className={styles.embed_container}>
                  <iframe 
                     src="https://www.youtube.com/embed/kWSCOafIWJs?rel=0&amp;showinfo=0&amp;autoplay=1" 
                     frameBorder="0" 
                     allow="autoplay; encrypted-media" 
                     allowfullscreen />
               </div>
            </div>}
            <div id={styles.strip} />
            <div id={styles.projectNo}>
               Project
               1 / 3
            </div>
         </div>
      )
   }
}

export default Tellme