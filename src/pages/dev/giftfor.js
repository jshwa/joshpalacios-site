import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/giftfor.module.css';

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
                     <text x="39" y="15" text-anchor="middle" fill="white" >
                        Gift For
                     </text>
                  </svg>
               </div>
               <div id={styles.github}>
                  Github
               </div>
               <div id={styles.blurb}>
                  A Ruby on Rails web app to cultivate crowd-sourced gift guides  
               </div>
               <div id={styles.skills1}>
                  <span class={styles.skillBox}>Ruby</span>
                  <span class={styles.skillBox}>JS</span>
                  <span class={styles.skillBox}>Rails</span>
                  <span class={styles.skillBox}>JQuery</span>
               </div>
               <div id={styles.skills2}>
                  <span class={styles.skillBox}>SQL</span>
                  <span class={styles.skillBox}>OAuth</span>
                  <span class={`${styles.skillBox} ${styles.blank}`}></span>
                  <span class={`${styles.skillBox} ${styles.blank}`}></span>
               </div>
            </div>
            <div id={styles.img}>
               <Img sizes={this.props.data.giftfor.sizes} />
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               <Img sizes={this.props.data.overlay.sizes}/>
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

export default Giftfor

export const query = graphql`
  query GiftForImageQuery {
    giftfor: imageSharp(id: { regex: "/giftforComp.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    overlay: imageSharp(id: { regex: "/compPlayOverlay.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;