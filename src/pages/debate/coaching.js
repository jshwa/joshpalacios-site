import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styles from "../../css/debate/coaching.module.css";

class Coaching extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         active: null,
      };
   }

   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12.5" text-anchor="middle" fill="#181840">
                     COACHING
                  </text>
               </svg>
            </div>
            <div id={styles.teach}>
               <svg viewBox="0 0 60 13" preserveAspectRatio="xMidYMid meet">
                  <text x="30" y="12.5" text-anchor="middle" fill="#FFF">
                     TEACH
                  </text>
               </svg>
            </div>
            <div id={styles.teachImg}>
               <Img sizes={this.props.data.teach.sizes}/>
            </div>
            <div id={styles.train}>
               <svg viewBox="0 0 60 13" preserveAspectRatio="xMidYMid meet">
                  <text x="30" y="12.5" text-anchor="middle" fill="#FFF">
                     TRAIN
                  </text>
               </svg>
            </div>
            <div id={styles.trainImg}>
               <Img sizes={this.props.data.train.sizes} />
            </div>
            <div id={styles.compete}>
               <svg viewBox="0 0 60 13" preserveAspectRatio="xMidYMid meet">
                  <text x="30" y="12.5" text-anchor="middle" fill="#FFF">
                     COMPETE
                  </text>
               </svg>
            </div>
            <div id={styles.competeImg}>
               <Img sizes={this.props.data.compete.sizes} />
            </div>
            <div id={styles.background} />
            <div id={styles.teachBlurb}>
               Lorem ipsum dolor amet coloring book vape normcore pickled, green juice edison bulb mumblecore farm-to-table before they sold out meh chicharrones yuccie sartorial chambray paleo. Biodiesel chia craft beer, microdosing la croix poke yr shoreditch before they sold out. Flexitarian palo santo tumblr gluten-free, salvia ugh raclette woke chambray stumptown try-hard. 
            </div>
            <div id={styles.trainBlurb}>
               Mlkshk glossier beard whatever copper mug jianbing taiyaki, gastropub deep v williamsburg irony crucifix kitsch four dollar toast iPhone. La croix dreamcatcher hexagon put a bird on it migas gluten-free chambray blog sustainable butcher fashion axe shoreditch pinterest tbh. Tattooed chia fanny pack lumbersexual, +1 truffaut taxidermy kogi man bun taiyaki lyft vinyl. Drinking vinegar paleo vaporware, pitchfork poutine VHS coloring book kickstarter intelligentsia aesthetic synth roof party edison bulb. Organic banh mi humblebrag vape. Air plant pour-over meh sriracha green juice kinfolk. Freegan yr gochujang prism shoreditch cred tofu occupy.            
            </div>
            <div id={styles.competeBlurb}>
               Forage gentrify DIY, slow-carb chillwave put a bird on it leggings kinfolk drinking vinegar pug yuccie mixtape wolf prism meh. Intelligentsia adaptogen sustainable +1 poutine kogi cliche gastropub subway tile stumptown next level trust fund pabst wolf venmo. Put a bird on it flannel brunch jianbing, normcore enamel pin four loko tumeric roof party flexitarian salvia af. Poke echo park brunch, seitan bitters banjo cronut. Kogi roof party cred +1 lumbersexual celiac. Tacos retro umami blue bottle fanny pack farm-to-table organic poke. Four dollar toast lumbersexual wolf, sustainable banh mi heirloom authentic.            
            </div>
            <div id={styles.teachBg}>
               <Img sizes={this.props.data.teachBg.sizes} />
            </div>
            <div id={styles.trainBg}>
               <Img sizes={this.props.data.trainBg.sizes} />
            </div>
            <div id={styles.competeBg}>
               <Img sizes={this.props.data.competeBg.sizes} />
            </div>
         </div>
      )
   }
}

export default Coaching

export const query = graphql`
  query coachingImageQuery {
    teach: imageSharp(id: { regex: "/teach.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
    train: imageSharp(id: { regex: "/train.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
    compete: imageSharp(id: { regex: "/compete.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
    teachBg: imageSharp(id: { regex: "/teachBg.jpg/"}) {
       sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes
       }
    }
    trainBg: imageSharp(id: { regex: "/trainBg.jpg/"}) {
       sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes
       }
    }
    competeBg: imageSharp(id: { regex: "/competeBg.jpg/"}) {
       sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes
       }
    }
  }
`;