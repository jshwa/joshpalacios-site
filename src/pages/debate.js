import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import DebateAbout from './debate/about';
import Coaching from './debate/coaching';
import Speaking from './debate/speaking';
import Contention1 from './debate/contention1';
import Contact from './debate/contact';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import styles from '../css/debate.module.css';


class Debate extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

   render() {
      const { current } = this.state
      const options = {
         sectionClassName:     'section',
         anchors:              ['about', 'coaching', 'speaking', 'contention1', 'contact'],
         scrollBar:            false,
         navigation:           true,
         verticalAlign:        true,
         sectionPaddingTop:    '0px',
         sectionPaddingBottom: '0px',
         arrowNavigation:      true,
         scrollCallback: (states) => this.setState({current: states.activeSection})
         };

      return (
         <SectionsContainer  class="container" {...options} activeSection={current}>
            <Section>
               <DebateAbout
                  shanghai={<Img sizes={this.props.data.shanghai.sizes} />}
                  josh={<Img sizes={this.props.data.josh.sizes} />}
               />
            </Section>
            <Section>
               <Coaching
                  teach={<Img sizes={this.props.data.teach.sizes}/>}
                  train={<Img sizes={this.props.data.train.sizes}/>}
                  compete={<Img sizes={this.props.data.compete.sizes}/>}
                  teachBg={<Img sizes={this.props.data.teachBg.sizes}/>}
                  trainBg={<Img sizes={this.props.data.trainBg.sizes}/>}
                  competeBg={<Img sizes={this.props.data.competeBg.sizes}/>}
               />
            </Section>
            <Section>
               <Speaking
                  onStage= {<Img sizes={this.props.data.onStage.sizes} imgStyle={{height: '100vh'}} />}
               />
            </Section>
            <Section>
               <Contention1
                  c1={<Img sizes={this.props.data.c1.sizes} />}
                  c1overlay={<Img sizes={this.props.data.c1overlay.sizes} />}
               />
            </Section>
            <Section>
               <Contact 
                  wechat={<Img sizes={this.props.data.wechat.sizes} />}
               />
            </Section>
         </SectionsContainer>
      )
   }
}

export default Debate

export const query = graphql`
  query debateImageQuery {
    shanghai: imageSharp(id: { regex: "/Shanghai.jpeg/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    josh: imageSharp(id: { regex: "/headshot-circle.png/"}) {
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