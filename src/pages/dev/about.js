import React from 'react';
import Img from 'gatsby-image';
import styles from '../../css/dev/about.module.css';
import animateStyles from '../../css/animate.module.css';

class About extends React.Component {
   render(){
      const fadeIn = this.props.active ? animateStyles.fadeIn : "";

      return(
         <div id={styles.wrapper}>
            <div id={styles.texas}>
               <svg width="100%" height="100%" x="0px" y="0px"
                  viewBox="0 0 1280 1024" xmlSpace="preserve">
                  <path className="path" fill="none" stroke="#000000" strokeWidth="8" strokeMiterlimit="10"
                     d="M241.5,428.9c42.3,0,84.6-0.3,126.9,0.2c10.5,0.1,13-3.5,13.3-13.4c2-78.2,0.7-156.4,2.4-234.6
                     c1.1-50.5,0.8-100.9,1.7-151.4c0.2-13.3,1.4-14.5,14.8-14.5c74.3,0,148.6,0,222.9,0c13.5,0,14.5,1.1,14.6,14.7
                     c0.1,46.6,0.4,93.2-0.2,139.7c-0.2,15.7,8,26,18.4,35.5c5.2,4.8,11.5,5.6,17.8,2.1c9.6-5.3,17.9-2,21.6,6.4
                     c7.3,16.3,22,14.6,35,16.5c16.3,2.4,32.7,3.6,49.2,3c4.9-0.2,9.6,2,9.3,7.9c-0.4,7.8,8.1,5.6,10.5,10.4c4.5,8.6,8.1,0.2,11.6-1.4
                     c7-3.3,13.2-4.9,19.2,1.9c5,5.7,11.2,6.7,18.3,4c4.2-1.6,8.5-3.8,12.7,0.7c2.6,2.7,3.3-0.9,4.3-2.3c5-6.4,10.6-6.4,16.5-1.5
                     c2.9,2.4,6.4,4.7,9.6,2.6c7.5-4.9,13.1-0.9,18.1,3.6c8.4,7.6,16.5,9.3,26.6,2.6c6.4-4.2,13.9-7.4,22.2-3.9c2.7,1.2,5.5-0.5,8.1-1.7
                     c8.2-3.8,16.1-7.2,25-0.9c3.2,2.3,7.9,1.3,10.9-1.7c5.2-5.1,10-3.5,15.4-0.3c14.6,8.8,30.9,14.1,46.3,21
                     c12.6,5.6,24.4,10.3,38.2,11.3c7.3,0.5,6.5,7.4,6.5,12.6c0.1,39.8,0.3,79.6-0.1,119.5c-0.1,9.8,2,17.7,8.7,25.2
                     c6.5,7.3,13.4,15.1,10,26.6c-0.4,1.2,1.2,3.1,2.1,4.5c19.3,29.1,26.6,59,9.1,92c-4.9,9.2-5.8,20-2.4,30.9c3.4,11.1-1.5,21.1-8,29.8
                     c-5.1,6.8-7.8,13.2-3.5,21.5c2.8,5.3,1,8.8-5.6,9.1c-25,1.1-45.8,13.1-63.4,28.8c-39,34.8-81.8,63.3-127.4,88.6
                     c-40.7,22.6-69,56.7-80.3,102.9c-3.2,13.2-2.4,26.8,1.6,40.1c6.8,22.8,11,46.3,15.5,69.7c1.3,6.8,0.2,11.2-7.8,15.8
                     c-17,9.9-29.4,8.6-41.4-7.1c-3.6-4.7-11.1-4.4-17.1-4.3c-16.6,0.2-31.2-2.9-46.1-12.5c-10.6-6.8-23.2-14.4-36.2-16.5
                     c-15.3-2.4-20.3-12.8-24-24.6c-2.8-9.3-6.1-17.9-12.1-25.7c-6.1-7.8-9.4-16.6-10.4-27.2c-0.9-9.9-4.1-19.7-3.7-30
                     c0.2-3.9-2.5-7.2-6.1-9.4c-13-7.9-23.2-18.4-29-32.9c-1.5-3.9-3.8-8.1-6.9-10.6c-20.5-15.9-29.8-39.2-37.9-61.9
                     c-9.7-27.1-26.7-47.5-46-67.9c-16.2-17.1-33.6-27.5-57.2-27c-1.4,0-3,0-4.2-0.6c-18.5-8.8-34.8,2.7-52.1,5.5
                     c-3.2,0.5-4.3,3.5-5.3,6.2c-1.9,5-4.6,9.8-5.5,15c-3.2,18.3-15.2,31.1-26.9,44.2c-2.4,2.7-5.5,3.6-8.6,3.2c-4.5-0.5-9.5-0.8-13.4-3
                     c-29.8-16.3-63.8-26.1-87.7-51.5c-13.1-13.9-28.4-28.5-24.8-51.3c0.2-1.4,0.4-3.1-0.3-4.2c-12.7-20.6-17.8-46.5-42.7-58.8
                     c-20.1-9.9-34.3-27.3-49.8-42.8c-1.8-1.8-3-4.3-5-5.5c-14.1-8-26.2-17.6-33.3-32.8c-1.2-2.7-5.6-4.1-8.7-5.8
                     c-7.3-3.9-12.1-9.9-14.6-17.6c-3.9-11.9-0.5-16.7,11.9-16.7C155.4,428.9,198.4,428.9,241.5,428.9z"/>
               </svg>
            </div>
            <div id={styles.name}>
               <svg viewBox="0 0 100 16" preserveAspectRatio="xMinYMin meet">
                  <text x="100" y="15" textAnchor="end" fill="#000" opacity=".2" >
                     <tspan style={{fontFamily: "HelveticaNeue-Light"}}>Josh</tspan>
                     <tspan style={{fontFamily: "HelveticaNeue", fontWeight:"bold"}}>Palacios</tspan>
                  </text>
               </svg>
            </div>
            <div id={styles.title}>
               <svg viewBox="0 0 80 16"  preserveAspectRatio="xMinYMin meet">
                  <text x="0" y="15" fill="#FFF">
                     <tspan>ABOUT</tspan>
                  </text>
               </svg>
            </div>
            <div id={styles.about} className={fadeIn}>
               I’m a newly established resident of the great city of Houston, and a recent graduate of the Flatiron School. Over 15 years ago I learned HTML and CSS to create my own websites (I must have made a new geocities site every week). The web was fascinating to me then, but today it's mind-blowing. I’m currently enjoying React and it’s many off-shoots, like Preact and (with this site) GatsbyJS for front-end development, and I still like the convention over configuration approach of Ruby on Rails, and the super-friendly syntax of Ruby for back-end.
            </div>
            <div id={styles.img} className={fadeIn}>
               {this.props.josh && <Img
                  title="Josh Palacios"
                  alt="Josh Palacios"
                  sizes={this.props.josh.sizes}
               />}
            </div>
            <div id={styles.strip} />
         </div>
      )
   }
}

export default About