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
      hoverDebate: false,
      hoverDev: false,
      removeDebate: false,
      removeDev: false,
    };
  }

  mouseEnterDebate = () => {
     this.setState({
        hoverDebate: true
     });
     setTimeout(function(){
      this.setState({
         removeDev: true
      })
   }.bind(this), 200);
  }

  mouseEnterMain = () => {
   this.setState({
      hoverDebate: false,
      hoverDev: false,
      removeDebate: false,
      removeDev: false
   });
   }

   mouseEnterDev = () => {
      this.setState({
         hoverDev: true
      });
      setTimeout(function(){
         this.setState({
            removeDebate: true
         })
      }.bind(this), 200);
   } 

  render() {
     const { hoverDebate, hoverDev, removeDebate, removeDev } = this.state;
     const hidebackground = hoverDebate || hoverDev ? styles.hidebackground : '';
     const focustitle = hoverDebate || hoverDev ? styles.focustitle : '';
     const slideRight = hoverDebate ? styles.imgSlideRight : '';
     const slideLeft = hoverDev ? styles.imgSlideLeft : '';
     const moveBack = hoverDev ? styles.moveBack : '';
     const remove1 = removeDebate ? {display: 'none'} : '';
     const remove2 = removeDev ? {display:'none'} : '';

     return (
      <div class={styles.wrapper}>
        {hoverDebate && <DebateNav id={styles.debatenav} />}
        {hoverDev && <DevNav id={styles.devnav} />}
        <div id={styles.debate} style={remove1} onMouseEnter={this.mouseEnterDebate} >
         <DebateBackground 
            background={styles.backgroundsvg} 
            hide={hidebackground} 
            title={styles.titlesvg}
            focus={focustitle}/>
        </div>
        <div id={styles.dev} style={remove2} onMouseEnter={this.mouseEnterDev}>
         <DevBackground 
            background={styles.backgroundsvg} 
            hide={hidebackground} 
            title={styles.titlesvg}
            focus={focustitle}/>
        </div>
        <div 
          id={styles.img} 
          class={`${slideRight} ${slideLeft}`} 
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