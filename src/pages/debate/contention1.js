import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/debate/contention1.module.css';
import animateStyles from '../../css/animate.module.css';

class Contention1 extends React.Component {
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

      const slideInRight = this.props.active ? animateStyles.slideInRight : "";
      const slideInLeft = this.props.active ? animateStyles.slideInLeft : "";

      return(
         <div id={styles.wrapper}>
            <div id={styles.topbar} className={slideInLeft} />
            <div id={styles.blurb} className={slideInLeft}>
               Contention 1 is China’s first debate podcast, hosted by Josh Palacios and James Durkee. A debaters first resource for inspiration and evidence for debate topics in China.
            </div>
            <div id={styles.c1button} className={slideInRight}>
               <a href="http://contention1.com" target="_blank">Visit the Site</a>
            </div>
            <div id={styles.bottombar} className={slideInRight}/>
            <div id={styles.img} className={slideInLeft}>
               {this.props.c1 && <Img
                  title="Contention 1 Podcast"
                  alt="Listen to the Contention 1 Podcast on iTunes"
                  sizes={this.props.c1.sizes}
                  imgStyle={{objectFit: "contain"}}
                  outerWrapperClassName={styles.imageWrapper}
                  className={styles.imageWrapper}
               />}
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               {this.props.c1overlay && <Img
                  title="Play a sample"
                  alt="Play a Sample"
                  sizes={this.props.c1overlay.sizes}
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
                     allowfullscreen />
               </div>
            </div>}
            <div id={styles.title}>
               <svg viewBox="0 0 92 13" preserveAspectRatio="xMidYMid meet">
                  <text x="47" y="12" textAnchor="middle" fill="#000">
                     CONTENTION1
                  </text>
               </svg>
            </div>
         </div>
      )
   }
}

export default Contention1
