import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from '../css/index.module.css';
import '../css/index.css';
import { DebateNav, DevNav } from '../components/circleNav';
import { DebateBackground, DevBackground } from '../components/indexBackground';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      main: null,
      showNav: '',
      removeDebate: '',
      removeDev: '',
      hidebackground: '',
      focustitle: '',
      slideImg: '',
      svgPAR: '',
      moveUp: '',
      debateBgndColor: '',
      devBgndColor: '',
    };
  }

  componentWillMount() {
     const par = window.innerWidth < 1100 ? 'meet' : 'slice';
     this.setState({
        svgPAR: par
     })
  }

  mouseEnterDebate = () => {
   this.state.main != 'debate' &&
      this.setState({
         main: 'debate',
         showNav: <DebateNav id={styles.debatenav}/>,
         hidebackground: styles.hidebackground,
         focustitle: styles.focustitle,
         slideImg: styles.imgSlideRight,
         moveUp: {zIndex: '1', transitionDelay: "z-index 0s"},
         debateBgndColor: {backgroundPosition: '25% 0%', transition: "background-position 3s ease-in-out"},
      });
  }

  mouseEnterMain = () => {
   this.state.main != null &&
      this.setState({
         main: null,
         showNav: null,
         removeDebate: '',
         removeDev: '',
         hidebackground: '',
         focustitle: '',
         slideImg:'',
         moveUp: {zIndex: '1', transitionDelay: "z-index 1s"},
         debateBgndColor: '',
         devBgndColor: {transition: 'background-position 1s ease-in-out, z-index 2s'}
      });
  }

   mouseEnterDev = () => {
    this.state.main != 'dev' &&
      this.setState({
         main: 'dev',
         showNav: <DevNav id={styles.devnav} />,
         hidebackground: styles.hidebackground,
         focustitle: styles.focustitle,
         slideImg: styles.imgSlideLeft,
         moveUp: {zIndex: '3'},
         devBgndColor: {backgroundPosition: '50% 0%', transition: "background-position 3s ease-in-out"},
      });
   } 

  render() {
     const { showNav, removeDebate, removeDev, hidebackground, focustitle, slideImg, svgPAR, moveUp, debateBgndColor, devBgndColor } = this.state;

     return (
      <div class={styles.wrapper}>
        {this.state.showNav}
        <div id={styles.debate} style={debateBgndColor} onMouseEnter={this.mouseEnterDebate} >
         <DebateBackground 
            background={styles.backgroundsvg} 
            hide={hidebackground} 
            title={styles.titlesvg}
            focus={focustitle}
            PARval={svgPAR}/>
        </div>
        <div id={styles.dev} style={{...moveUp, ...devBgndColor}} onMouseEnter={this.mouseEnterDev}>
         <DevBackground 
            background={styles.backgroundsvg} 
            hide={hidebackground} 
            title={styles.titlesvg}
            focus={focustitle}
            PARval={svgPAR}/>
        </div>
        <div  
          id={styles.img} 
          class={slideImg} 
          onMouseEnter={this.mouseEnterMain}>
          <Img sizes={this.props.data.josh.sizes} />
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
   }
`;