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
            <text x="0" y="50" class={styles.backgroundsvg}>OACHDEBATECOACHDE
               <animate id="scrollanim1" attributeName="x" from="-50" to="0" dur="7s" begin="0s; scrollanim2.end" />
               <animate id="scrollanim2" attributeName="x" from="0" to="-50" dur="14s" begin="scrollanim1.end" />
            </text>
            <text x="0" y="120" class={styles.backgroundsvg}>DEBATECOACHDEBATE
               <animate id="scrollanim3" attributeName="x" from="-25" to="-50" dur="10s" begin="0s; scrollanim4.end" />
               <animate id="scrollanim4" attributeName="x" from="-50" to="-25" dur="12s" begin="scrollanim3.end" />
            </text>
            <text x="0" y="190" class={styles.backgroundsvg}>TECOACHDEBATECOAC
               <animate id="scrollanim5" attributeName="x" from="25" to="-50" dur="8s" begin="0s; scrollanim6.end" />
               <animate id="scrollanim6" attributeName="x" from="-50" to="25" dur="15s" begin="scrollanim5.end" />
            </text>
            <text x="0" y="260" class={styles.backgroundsvg}> HDEBATECOACHDEBAT
               <animate id="scrollanim7" attributeName="x" from="-25" to="-50" dur="11s" begin="0s; scrollanim8.end" />
               <animate id="scrollanim8" attributeName="x" from="-50" to="-25" dur="18s" begin="scrollanim7.end" />
            </text>
            <text x="0" y="330" class={styles.backgroundsvg}>ATECOACHDEBATECOA
               <animate id="scrollanim9" attributeName="x" from="-50" to="0" dur="12s" begin="0s; scrollanim10.end" />
               <animate id="scrollanim10" attributeName="x" from="0" to="-50" dur="19s" begin="scrollanim9.end" />
            </text>
            <text x="0" y="400" class={styles.backgroundsvg}>DEBATECOACHDEBATE</text>
            <text x="0" y="400" fill="white" class={styles.titlesvg}>DEBATE</text>
            <text x="0" y="470" class={styles.backgroundsvg}>COACHDEBATECOACHD</text>
            <text x="0" y="470" fill="white" class={styles.titlesvg}>COACH</text>
            <text x="0" y="540" class={styles.backgroundsvg}>BATECOACHDEBATECO
               <animate id="scrollanim11" attributeName="x" from="0" to="-50" dur="7s" begin="0;scrollanim12.end" fill="freeze" />
               <animate id="scrollanim12" attributeName="x" from="-50" to="0" dur="12s" begin="scrollanim11.end" fill="freeze" />
            </text>
            <text x="0" y="610" class={styles.backgroundsvg}>OACHDEBATECOACHDE
               <animate id="scrollanim19" attributeName="x" from="-100" to="0" dur="15s" begin="0s; scrollanim20.end" />
               <animate id="scrollanim20" attributeName="x" from="0" to="-100" dur="15s" begin="0s; scrollanim19.end" />
            </text>
            <text x="0" y="680" class={styles.backgroundsvg}>HDEBATECOACHDEBAT
               <animate id="scrollanim13" attributeName="x" from="-25" to="-50" dur="7s" begin="0s; scrollanim14.end" />
               <animate id="scrollanim14" attributeName="x" from="-50" to="-25" dur="15s" begin="scrollanim13.end" />
            </text>
            <text x="0" y="750" class={styles.backgroundsvg}>DEBATECOACHDEBATE
               <animate id="scrollanim15" attributeName="x" from="-75" to="0" dur="9s" begin="0s; scrollanim16.end" />
               <animate id="scrollanim16" attributeName="x" from="0" to="-75" dur="18s" begin="scrollanim15.end" />
            </text>
            <text x="0" y="820" class={styles.backgroundsvg}>ECOACHDEBATECOACH
               <animate id="scrollanim17" attributeName="x" from="0" to="-100" dur="7s" begin="0s; scrollanim18.end" />
               <animate id="scrollanim18" attributeName="x" from="-100" to="0" dur="10s" begin="scrollanim17.end" />
            </text>
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