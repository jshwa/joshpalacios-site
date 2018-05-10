import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import About from './dev/about';
import TellMe from './dev/tellme';
import GiftFor from './dev/giftfor';
import Incoming from './dev/incoming';
import TechDebate from './dev/techdebate';
import Blog from './dev/blog';
import DevContact from './dev/contact';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import styles from '../css/dev.module.css';

class Developer extends React.Component {
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
         anchors:              ['about', 'tellme', 'giftfor', 'incoming', 'techanddebate', 'blog', 'contact'],
         scrollBar:            false,
         navigation:           true,
         verticalAlign:        true,
         sectionPaddingTop:    '0px',
         sectionPaddingBottom: '0px',
         arrowNavigation:      true,
         scrollCallback: (states) => this.setState({current: states.activeSection})
         };
      
      const aboutActive = this.state.current === 0 ? true : false;
      const tellmeActive = this.state.current === 1 ? true : false;
      const giftforActive = this.state.current === 2 ? true : false;
      const incomingActive = this.state.current === 3 ? true : false;
      const techdebateActive = this.state.current === 4 ? true : false;
      const blogActive = this.state.current === 5 ? true : false;
      const contactActive = this.state.current === 6 ? true : false;

      return (
         <div>
            <div id={styles.homebutton}>
               <Link to="/">HOME</Link>
            </div>
            <SectionsContainer  class="container" {...options} activeSection={current}>
               <Section>
                  <About
                     active={aboutActive} 
                     josh={this.props.data.joshp}
                  />
               </Section>
               <Section>
                  <TellMe 
                     active={tellmeActive}
                     tellme={this.props.data.tellme}
                     tellmeoverlay={this.props.data.tellmeoverlay}
                     />
               </Section>
               <Section>
                  <GiftFor 
                     active={giftforActive}
                     giftfor={this.props.data.giftfor}
                     giftforoverlay={this.props.data.giftforoverlay}
                  />
               </Section>
               <Section>
                  <Incoming 
                     active={incomingActive}
                     incoming={this.props.data.incoming}
                     incomingoverlay={this.props.data.incomingoverlay}
                  />
               </Section>
               <Section>
                  <TechDebate 
                     active={techdebateActive}
                     debatetech={this.props.data.debatetech}
                  />
               </Section>
               <Section>
                  <Blog 
                     active={blogActive}
                     gilbertson={this.props.data.gilbertson}
                     urban={this.props.data.urban}
                     pudding={this.props.data.pudding}
                  />
               </Section>
               <Section>
                  <DevContact 
                     active={contactActive}
                  />
               </Section>
            </SectionsContainer>
         </div>
      )
   }
}

export default Developer

export const query = graphql`
  query DevImageQuery {
   joshp: imageSharp(id: { regex: "/joshp.jpg/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
    tellme: imageSharp(id: { regex: "/tellMeGraphic.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    tellmeoverlay: imageSharp(id: { regex: "/tellMeOverlay.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    giftfor: imageSharp(id: { regex: "/giftforComp.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
    giftforoverlay: imageSharp(id: { regex: "/compPlayOverlay.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
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
    debatetech: imageSharp(id: { regex: "/debatetech.png/"}) {
      sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes_noBase64
      }
    }
    gilbertson: imageSharp(id: { regex: "/gilbertson.png/"}) {
      sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes_noBase64
      }
    }
    urban: imageSharp(id: { regex: "/urban.png/"}) {
      sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes_noBase64
      }
    }
    pudding: imageSharp(id: { regex: "/pudding.png/"}) {
      sizes(maxWidth: 1080) {
         ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;