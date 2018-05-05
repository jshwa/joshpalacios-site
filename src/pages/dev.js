import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import About from './dev/about';
import TellMe from './dev/tellme';
import GiftFor from './dev/giftfor';
import Incoming from './dev/incoming';
import Contact from './dev/contact';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';

class Dev extends React.Component {
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
               <About />
            </Section>
            <Section>
               <TellMe 
                  tellme={<Img sizes={this.props.data.tellme.sizes} />}
                  tellmeoverlay={<Img sizes={this.props.data.tellmeoverlay.sizes} />}
                  />
            </Section>
            <Section>
               <GiftFor 
                  giftfor={<Img sizes={this.props.data.giftfor.sizes} />}
                  giftforoverlay={<Img sizes={this.props.data.giftforoverlay.sizes} />}
               />
            </Section>
            <Section>
               <Incoming 
                  incoming={<Img sizes={this.props.data.incoming.sizes} />}
                  incomingoverlay={<Img sizes={this.props.data.incomingoverlay.sizes} />}
               />
            </Section>
            <Section>
               <Contact />
            </Section>
         </SectionsContainer>
      )
   }
}

export default Dev

export const query = graphql`
  query DevImageQuery {
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
  }
`;