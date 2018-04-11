import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from '../css/index.module.css';
import '../css/index.css';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      debateStyle: false,
    };
  }

  render() {
    return (
      <div class={styles.wrapper}>
        <div id={styles.debate}>
         <svg width="70vw" height="100vh" viewBox="0 0 500 800" preserveAspectRatio="xMinYMid slice">
            <text x="0" y="50">OACHDEBATECOACHDE</text>
            <text x="0" y="120">DEBATECOACHDEBATE</text>
            <text x="0" y="190">TECOACHDEBATECOAC</text>
            <text x="0" y="260"> HDEBATECOACHDEBAT
               <animate id="scrollanim1" attributeName="x" from="-25" to="-50" dur="7s" begin="0s; scrollanim2.end" />
               <animate id="scrollanim2" attributeName="x" from="-50" to="-25" dur="15s" begin="scrollanim1.end" />
            </text>
            <text x="0" y="330">ATECOACHDEBATECOA
               <animate id="scrollanim1" attributeName="x" from="-50" to="0" dur="12s" begin="0s; scrollanim2.end" />
               <animate id="scrollanim2" attributeName="x" from="0" to="-50" dur="15s" begin="scrollanim1.end" /></text>
            <text x="0" y="400">DEBATECOACHDEBATE</text>
            <text x="0" y="400" fill="white">DEBATE</text>
            <text x="0" y="470">COACHDEBATECOACHD</text>
            <text x="0" y="470" fill="white">COACH</text>
            <text x="0" y="540">
               <animate id="scrollanim1" attributeName="x" from="-100" to="0" dur="15s" begin="0; scrollanim2.end" fill="freeze" />
               <animate id="scrollanim2" attributeName="x" from="0" to="-100" dur="15s" begin="scrollanim1.end" fill="freeze" />
               BATECOACHDEBATECO
            </text>
            <text x="0" y="610"><animate attributeType="XML" attributeName="x" from="-100" to="0"
        dur="10s" repeatCount="indefinite"/>OACHDEBATECOACHDE</text>
            <text x="0" y="680">HDEBATECOACHDEBAT</text>
            <text x="0" y="750">DEBATECOACHDEBATE</text>
            <text x="0" y="820">ECOACHDEBATECOACH</text>
         </svg>
        </div>
        <div id={styles.dev}>
         <svg width="70vw" height="100vh" viewBox="-500 0 500 800" preserveAspectRatio="xMaxYMid slice">
               <text x="0" y="50" text-anchor="end">WEBDEVELOPERWEBDE</text>
               <text x="0" y="120" text-anchor="end">EVELOPERWEBDEVELO</text>
               <text x="0" y="190" text-anchor="end">PERWEBDEVELOPERWE</text>
               <text x="0" y="260" text-anchor="end">LOPERWEBDEVELOPER</text>
               <text x="0" y="330" text-anchor="end">EBDEVELOPERWEBDEV</text>
               <text x="0" y="400" text-anchor="end">ERWEBDEVELOPERWEB</text>
               <text x="0" y="400" fill="white" text-anchor="end">WEB</text>
               <text x="0" y="470" text-anchor="end">LOPERWEBDEVELOPER</text>
               <text x="0" y="470" fill="white" text-anchor="end">DEVELOPER</text>
               <text x="0" y="540" text-anchor="end">WEBDEVELOPERWEBDE</text>
               <text x="0" y="610" text-anchor="end">WEBDEVELOPERWEBDE</text>
               <text x="0" y="680" text-anchor="end">WEBDEVELOPERWEBDE</text>
               <text x="0" y="750" text-anchor="end">WEBDEVELOPERWEBDE</text>
               <text x="0" y="820" text-anchor="end">WEBDEVELOPERWEBDE</text>
            </svg>
        </div>
        <div id={styles.img}>
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