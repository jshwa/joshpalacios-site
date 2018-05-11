import React from 'react';
import Link from 'gatsby-link';
import DebateAbout from './debate/about';
import Coaching from './debate/coaching';
import Speaking from './debate/speaking';
import Contention1 from './debate/contention1';
import Contact from './debate/contact';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import styles from '../css/debate.module.css';


class Debater extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

    handleScroll = e => {
      console.log(e.deltaY)
    }

   render() {
      const { current } = this.state
      const options = {
         sectionClassName:     'section',
         anchors:              ['about', 'coaching', 'contention1', 'speaking', 'contact'],
         scrollBar:            false,
         navigation:           true,
         verticalAlign:        false,
         sectionPaddingTop:    '0px',
         sectionPaddingBottom: '0px',
         arrowNavigation:      true,
         scrollCallback: (states) => this.setState({current: states.activeSection})
         };

      const aboutActive = current === 0 ? true : false;
      const coachingActive = current === 1 ? true : false;
      const c1Active = current === 2 ? true : false;
      const speakingActive = current === 3 ? true : false;
      const contactActive = current === 4 ? true : false;

      return (
         <div>
            <div id={styles.homebutton}>
               <Link to="/">HOME</Link>
            </div>
            <SectionsContainer  class="container" {...options} activeSection={current}>            
               <Section>
                  <DebateAbout
                     active={aboutActive}
                     shanghai={this.props.data.shanghai}
                     joshcircle={this.props.data.joshcircle}
                  />
               </Section>
               <Section>
                  <Coaching
                     active={coachingActive}
                     teach={this.props.data.teach}
                     train={this.props.data.train}
                     compete={this.props.data.compete}
                     teachBg={this.props.data.teachBg}
                     trainBg={this.props.data.trainBg}
                     competeBg={this.props.data.competeBg}
                  />
               </Section>
               <Section>
                  <Contention1
                     active={c1Active}
                     c1={this.props.data.c1}
                     c1overlay={this.props.data.c1overlay}
                  />
               </Section>
               <Section>
                  <Speaking
                     active={speakingActive}
                     onStage={this.props.data.onStage}
                  />
               </Section>
               <Section>
                  <Contact 
                     active={contactActive}
                     wechat={this.props.data.wechat}
                  />
               </Section>
            </SectionsContainer>
         </div>
      )
   }
}

export default Debater

export const query = graphql`
  query DebateImageQuery {
    shanghai: imageSharp(id: { regex: "/Shanghai.jpeg/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    joshcircle: imageSharp(id: { regex: "/joshpalacios.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
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
    c1: imageSharp(id: { regex: "/c1podcast.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    c1overlay: imageSharp(id: { regex: "/c1overlay.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    onStage: imageSharp(id: { regex: "/onstage.jpg/"}) {
      sizes(maxHeight: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
    wechat: imageSharp(id: { regex: "/wechatid.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;