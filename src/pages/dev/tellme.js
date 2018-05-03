import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/tellme.module.css';

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
                     <text x="39" y="15" text-anchor="middle" fill="white" >
                        Tell Me
                     </text>
                     <text x="39" y="30" text-anchor="middle" fill="white" >
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
                  <span class={styles.skillBox}>JS</span>
                  <span class={styles.skillBox}>React</span>
                  <span class={styles.skillBox}>Redux</span>
                  <span class={styles.skillBox}>Ruby</span>
               </div>
               <div id={styles.skills2}>
                  <span class={styles.skillBox}>Rails</span>
                  <span class={styles.skillBox}>JSON</span>
                  <span class={`${styles.skillBox} ${styles.blank}`}></span>
                  <span class={`${styles.skillBox} ${styles.blank}`}></span>
               </div>
            </div>
            <div id={styles.img}>
               <Img sizes={this.props.data.tellme.sizes} />
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               <Img sizes={this.props.data.tellmeoverlay.sizes} />
            </div>
            { this.state.play &&
            <div id={styles.youtube_wrapper} onClick={this.vidOff}/>}
            { this.state.play &&
            <div id={styles.youtube}>
               <div class={styles.embed_container}>
                  <iframe 
                     src="https://www.youtube.com/embed/kWSCOafIWJs?rel=0&amp;showinfo=0&amp;autoplay=1" 
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

export default Tellme

export const query = graphql`
  query TellMeImageQuery {
    tellme: imageSharp(id: { regex: "/tellMeGraphic.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    tellmeoverlay: imageSharp(id: { regex: "/tellMeOverlay.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;