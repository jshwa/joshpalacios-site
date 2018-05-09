import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from "../../css/debate/coaching.module.css";

class Coaching extends React.Component {
   render(){
      return(
         <div id={styles.wrapper}>
            <div id={styles.title}>
               <svg viewBox="0 0 68 13" preserveAspectRatio="xMidYMid meet">
                  <text x="34" y="12.5" textAnchor="middle" fill="#181840">
                     COACHING
                  </text>
               </svg>
            </div>
            <div id={styles.teach}>
               <svg viewBox="0 0 60 13" preserveAspectRatio="xMidYMid meet">
                  <text x="30" y="12.5" textAnchor="middle" fill="#FFF">
                     TEACH
                  </text>
               </svg>
            </div>
            <div id={styles.teachImg}>
               <Img
                  title="Teach Debate"
                  alt="Josh Teaching"
                  sizes={this.props.teach.sizes}
               />
            </div>
            <div id={styles.train}>
               <svg viewBox="0 0 60 13" preserveAspectRatio="xMidYMid meet">
                  <text x="30" y="12.5" textAnchor="middle" fill="#FFF">
                     TRAIN
                  </text>
               </svg>
            </div>
            <div id={styles.trainImg}>
               <Img
                  title="Train for Competitions"
                  alt="Practice Debates"
                  sizes={this.props.train.sizes}
               />
            </div>
            <div id={styles.compete}>
               <svg viewBox="0 0 60 13" preserveAspectRatio="xMidYMid meet">
                  <text x="30" y="12.5" textAnchor="middle" fill="#FFF">
                     COMPETE
                  </text>
               </svg>
            </div>
            <div id={styles.competeImg}>
               <Img
                  title="Compete in Tournaments"
                  alt="Winning Competitions"
                  sizes={this.props.compete.sizes}
               />
            </div>
            <div id={styles.background} />
            <div id={styles.teachBlurb}>
               Over 5 years I’ve spent hundreds of hours in the classroom teaching students the basics of debate, honing their skills, and pushing them to mastery. The approach to learning and thinking that debate fosters is incredibly valuable, and it’s just not available in a traditional classroom. I’ve created a teaching program that utilizes the Socratic method, student-led projects, and interactive lecture to quickly bring students to competitive levels.
            </div>
            <div id={styles.trainBlurb}>
               There is only one proven way to get better at debate: practice. This is true for everything: basketball, writing, violin, but debate is different because you can’t do it alone. You need a partner on your team and opponents to debate against; both can be intimidating obstacles. That’s why I maintain a strong network of debaters who are welcoming, encouraging, and always ready to help. I’ve instilled in my debaters not only the value of debate but also the value of teamwork and camaraderie; they remember the challenges and obstacles they faced as beginners (because I always remind them) so they never hesitate to encourage and support new debaters. 
            </div>
            <div id={styles.competeBlurb}>
               Let’s face it: research is boring. What isn’t boring is traveling the world and meeting (and debating) other smart, ambitious students. I’ve taken debaters to Beijing, Hangzhou, Nanjing, Ningbo, Shenzhen, Chengdu and as far as Seoul, Stanford, CA (where we placed 2nd in Public Forum at Stanford University) and Cambridge, MA (where we placed 2nd in the International Division Public Forum at Harvard University). There are a wealth of reasons to debate – developing your logical, critical and conceptual thinking are foremost – but getting to travel to new places and meeting new people are not only valuable, but fun!
            </div>
            <div id={styles.teachBg}>
               <Img
               title="Teaching Debate"
               alt="Bringing debaters together"
               sizes={this.props.teachBg.sizes}
               />
            </div>
            <div id={styles.trainBg}>
               <Img
               title="Preparing for Debates"
               alt="My Debaters in the prep room at St Regis"
               sizes={this.props.trainBg.sizes}
               />
            </div>
            <div id={styles.competeBg}>
               <Img
               title="Competing at Harvard"
               alt="My Debaters Competing at Harvard"
               sizes={this.props.competeBg.sizes}
               />
            </div>
         </div>
      )
   }
}

export default Coaching