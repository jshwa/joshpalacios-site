import React from 'react';
import Img from 'gatsby-image';
import styles from "../../css/debate/contact.module.css"

class Contact extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12" text-anchor="middle" fill="#181840">
                     CONTACT
                  </text>
               </svg>
            </div>
            <div id={styles.intouch}>
               <svg viewBox="0 0 150 20" preserveAspectRatio="xMidYMid meet">
                  <text x="80" y="15" text-anchor="middle" fill="#181840">
                     Want to get in touch?
                  </text>
               </svg>
            </div>
            <div id={styles.wechat}>
               <svg viewBox="0 0 150 20" preserveAspectRatio="xMidYMid meet">
                  <text x="70" y="15" text-anchor="middle" fill="#181840">
                     Or add me on WeChat
                  </text>
               </svg>
            </div>
            <div id={styles.wechatimg}>
               <Img sizes={this.props.data.wechat.sizes} />
            </div>
            <div id={styles.emailbutton}>
               <a href="mailto:hey@joshpalacios.com">Email Me</a>
            </div>
         </div>
      )
   }
}

export default Contact

export const query = graphql`
  query contactImageQuery {
    wechat: imageSharp(id: { regex: "/wechatid.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;