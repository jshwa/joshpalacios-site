import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/debate/contention1.module.css';

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
      return(
         <div id={styles.wrapper}>
            <div id={styles.desc}>
               <div id={styles.title}>
                  <svg viewBox="49 0 110 16"  preserveAspectRatio="xMidYMid meet">
                     <text x="55" y="15" text-anchor="middle" fill="white" >
                        Contention 1
                     </text>
                  </svg>
               </div>
               <div id={styles.blurb}>
                  A Ruby on Rails web app to cultivate crowd-sourced gift guides  
               </div>
               <div id={styles.c1button}>
                  <a href="http://contention1.com" target="_blank">Visit the Site</a>
               </div>
            </div>
            <div id={styles.img}>
               {this.props.c1}
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               {this.props.c1overlay}
            </div>
            { this.state.play &&
            <div id={styles.youtube_wrapper} onClick={this.vidOff}/>}
            { this.state.play &&
            <div id={styles.youtube}>
               <div class={styles.embed_container}>
                  <iframe 
                     src="https://www.youtube.com/embed/dEAa7JyfQ60?rel=0&amp;showinfo=0&amp;autoplay=1" 
                     frameborder="0" 
                     allow="autoplay; encrypted-media" 
                     allowfullscreen />
               </div>
            </div>}
            <div id={styles.strip} />
         </div>
      )
   }
}

export default Contention1
