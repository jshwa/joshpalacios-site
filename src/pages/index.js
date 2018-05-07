import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Img from 'gatsby-image';
import styles from '../css/index.module.css';
import '../css/index.css';
import { DebateNav, DevNav } from '../components/circleNav';
import { DebateBackground, DevBackground } from '../components/indexBackground';
import { DebateDesc, DevDesc } from '../components/indexDesc';
import Debater from './debater';
import Developer from './developer';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: '',
    };
  }

  mouseOverDebate = () => {
   this.state.active != 'Debater' &&
      this.setState({
         active: 'Debater',
      });
  }

   mouseOverDev = () => {
    this.state.active != 'Developer' &&
      this.setState({
         active: 'Developer',
      });
   } 

   handleWheel = e => {
     if (e.deltaY >= 10) {
        this.state.active === "Debater" ? navigateTo('/debater') : navigateTo('/developer')
     }
   }

  render() {
     const { active } = this.state;

     return (
         <div className={styles.wrapper} onWheel={this.handleWheel}>
            { this.state.active === "Debater" && <DebateNav id={styles.debatenav} /> }
            { this.state.active === 'Developer' && <DevNav id={styles.devnav} /> }
            <div id={styles.debate} onMouseOver={this.mouseOverDebate} />
            <div id={styles.dev} onMouseOver={this.mouseOverDev} />
            <div id={styles.title}>
               <svg viewBox="0 0 80 20"  preserveAspectRatio="xMinYMin meet">
                  <text x="80" y="15" textAnchor="end">
                  {this.state.active}
                  </text>
               </svg>
            </div>
            { this.state.active === "Debater" && <DebateDesc id={styles.debateDesc} /> }
            { this.state.active === "Developer" && <DevDesc id={styles.devDesc} /> }
            <div id={styles.img}>
               { this.state.active === 'Developer' ? <Img sizes={this.props.data.joshFlipped.sizes} /> : <Img sizes={this.props.data.josh.sizes} /> }
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
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    joshFlipped: imageSharp(id: {regex: "/JoshLogoCircleFlipped.png/"}) {
       sizes(maxWidth: 1080) {
          ...GatsbyImageSharpSizes_noBase64
       }
    }
  }
`;