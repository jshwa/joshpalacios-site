import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/incoming.module.css';

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
      return(
         <div id={styles.wrapper}>
            <div id={styles.desc}>
               <div id={styles.title}>
                  <svg viewBox="0 0 80 16"  preserveAspectRatio="xMidYMid meet">
                     <text x="42" y="12" text-anchor="middle" fill="white" >
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
                  <span class={styles.skillBox}>Ruby</span>
                  <span class={styles.skillBox}>Sinatra</span>
                  <span class={styles.skillBox}>Bootstrap</span>
                  <span class={styles.skillBox}>BCrypt</span>
               </div>
               <div id={styles.skills2}>
                  <span class={styles.skillBox}>HTML</span>
                  <span class={styles.skillBox}>CSS</span>
                  <span class={`${styles.skillBox} ${styles.blank}`}></span>
                  <span class={`${styles.skillBox} ${styles.blank}`}></span>
               </div>
            </div>
            <div id={styles.img}>
               <Img sizes={this.props.data.incoming.sizes} />
            </div>
            <div id={styles.overlay} onClick={this.vidOn}>
               <Img sizes={this.props.data.incomingoverlay.sizes} />
            </div>
            { this.state.play &&
            <div id={styles.youtube_wrapper} onClick={this.vidOff}/>}
            { this.state.play &&
            <div id={styles.youtube}>
               <div class={styles.embed_container}>
                  <iframe 
                     src="https://www.youtube.com/embed/-GSodBuzSq0?rel=0&amp;showinfo=0&amp;autoplay=1" 
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

export default Incoming

export const query = graphql`
  query incomingImageQuery {
    incoming: imageSharp(id: { regex: "/incomingGraphic.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    incomingoverlay: imageSharp(id: { regex: "/incomingOverlay.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;