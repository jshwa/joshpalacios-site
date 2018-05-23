import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Josh from '../img/JoshLogoCircle.png'
import styles from '../css/index.module.css';
import '../css/index.css';
import { DebateNav, DevNav } from '../components/circleNav';
import { DebateDesc, DevDesc } from '../components/indexDesc';
import Debater from './debater';
import Developer from './developer';
import faviconApple from '../img/favicons/apple-touch-icon.png'

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: '',
    };
  }

  componentDidMount() {
   const isChrome = !!window.chrome && !!window.chrome.webstore && navigator.userAgent.toLowerCase().indexOf('googlebot') === -1;
   this.isSafari = !isChrome && navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
  }

  mouseOverDebate = () => {
   this.state.active != 'Debater' &&
      setTimeout(() => {
         this.setState({ active: 'Debater' });
      }, 2)
  }

   mouseOverDev = () => {
    this.state.active != 'Developer' &&
      setTimeout(() => {
         this.setState({ active: 'Developer' });
      }, 2)
   } 

   handleWheel = e => {
     if (e.deltaY >= 10) {
        this.state.active === "Debater" ? navigateTo('/debater') : navigateTo('/developer')
     }
   }

  render() {
     const { active } = this.state;
     const debateImgClass = active === '' ? '' : styles.slideRight;
     const image = `https://joshpalacios.com${Josh}`

     return (
         <div className={styles.wrapper} onWheel={this.handleWheel}>
            <Helmet defaultTitle={`Josh Palacios | Full Stack Web Developer & Debate Coach`}>
               <meta name="og:site_name" content="Josh Palacios" />
               <meta name="description" content="Josh Palacios is a Full Stack Web Developer and Debate Coach based in Houston, Texas" />
               <meta property="og:title" content="Josh Palacios" />
               <meta property="og:image" content={image}/>
               <meta property="og:description" content="Josh Palacios is a Full Stack Web Developer and Debate Coach based in Houston, Texas" />
               <meta property="og:url" content="https://joshpalacios.com" />
               <link
                  rel="canonical"
                  href={`https://joshpalacios.com`}
               />
               <html lang="en" />
            </Helmet>
            { active === "Debater" && <DebateNav id={styles.debatenav} isSafari={this.isSafari}/> }
            { active === 'Developer' && <DevNav id={styles.devnav} isSafari={this.isSafari}/> }
            <div id={styles.debate} onMouseOver={this.mouseOverDebate} onClick={this.mouseOverDebate} />
            <div id={styles.dev} onMouseOver={this.mouseOverDev} onClick={this.mouseOverDev} />
            <div id={styles.title}>
               <svg viewBox="0 0 65 20" preserveAspectRatio="xMinYMin meet">
                  <text x="65" y="15" textAnchor="end">
                  {active}
                  </text>
               </svg>
            </div>
            { active === "Debater" && <DebateDesc id={styles.debateDesc} /> }
            { active === "Developer" && <DevDesc id={styles.devDesc} /> }
            <div id={styles.img}>
               { active === 'Developer' ? <Img sizes={this.props.data.joshFlipped.sizes} className={styles.slideLeft}/> : <Img sizes={this.props.data.josh.sizes} className={debateImgClass}/> }
            </div>
         </div>
      )
  }
}

export default IndexPage

export const query = graphql`
  query GatsbyImageQuery {
    josh: imageSharp(id: { regex: "/JoshLogoCircle.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    joshFlipped: imageSharp(id: {regex: "/JoshLogoCircleFlipped.png/"}) {
       sizes(maxWidth: 1080) {
          ...GatsbyImageSharpSizes_noBase64
       }
    }
  }
`;