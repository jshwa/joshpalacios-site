import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import About from './dev/about';
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
         </SectionsContainer>
      )
   }
}

export default Dev