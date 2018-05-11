import React from 'react';
import Link from 'gatsby-link';

export class DebateNav extends React.Component {
   constructor(props) {
      super(props);
   }

   render () {
      return (
         <div id={this.props.id} >
            <svg width="100%" height="100%" viewBox="0 0 300 450" preserveAspectRatio="xMidYMid meet">
               <a xlinkHref="/debater#about">
                  <text x="225" y="225" transform="rotate(30 500,225)" textAnchor="end" fill="black">
                     About
                     <animate 
                        id="visiblef1" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur="1ms" 
                        begin="0s" 
                        fill="freeze"
                        ref="visible" />
                     <animateTransform 
                        id="slide1" 
                        attributeName="transform" 
                        type="rotate" 
                        from="-180 500,225" 
                        to="30 500,225" 
                        dur="1s" 
                        begin="visiblef1.end" />
                  </text>
               </a>
               <a xlinkHref="/debater#coaching">
                  <text x="225" y="225" transform="rotate(15 500,225)" textAnchor="end" fill="black">
                     Coaching
                     <animate 
                           id="visiblef2" 
                           attributeName="visibility" 
                           from="hidden" 
                           to="visible" 
                           dur="1ms" 
                           begin="visiblef1.end" 
                           fill="freeze"/>
                        <animateTransform 
                           id="slide2" 
                           attributeName="transform" 
                           type="rotate" 
                           from="-180 500,225" 
                           to="15 500,225" 
                           dur="1s" 
                           begin="visiblef1.end" />
                  </text>
               </a>
               <a xlinkHref="/debater#contention1">
                  <text x="225" y="225" transform="rotate(0 500,225)" textAnchor="end" fill="black">
                     Contention 1
                     <animate 
                           id="visiblef3" 
                           attributeName="visibility" 
                           from="hidden" 
                           to="visible" 
                           dur="1ms" 
                           begin="visiblef1.end" 
                           fill="freeze"/>
                        <animateTransform 
                           id="slide3" 
                           attributeName="transform" 
                           type="rotate" 
                           from="-180 500,225" 
                           to="0 500,225" 
                           dur="1s" 
                           begin="visiblef1.end" />
                  </text>
               </a>
               <a xlinkHref="/debater#speaking">
                  <text x="225" y="225" transform="rotate(-15 500,225)" textAnchor="end" fill="black">
                     Speaking
                     <animate 
                           id="visiblef4" 
                           attributeName="visibility" 
                           from="hidden" 
                           to="visible" 
                           dur="1ms" 
                           begin="visiblef1.end" 
                           fill="freeze"/>
                        <animateTransform 
                           id="slide4" 
                           attributeName="transform" 
                           type="rotate" 
                           from="-180 500,225" 
                           to="-15 500,225" 
                           dur="1s" 
                           begin="visiblef1.end" />
                  </text>
               </a>
               <a xlinkHref="/debater#contact">
                  <text x="225" y="225" transform="rotate(-30 500,225)" textAnchor="end" fill="black">
                     Contact
                     <animate 
                           id="visiblef5" 
                           attributeName="visibility" 
                           from="hidden" 
                           to="visible" 
                           dur="1ms" 
                           begin="visiblef1.end" 
                           fill="freeze"/>
                        <animateTransform 
                           id="slide5" 
                           attributeName="transform" 
                           type="rotate" 
                           from="-180 500,225" 
                           to="-30 500,225" 
                           dur="1s" 
                           begin="visiblef1.end" />
                  </text>
               </a>
            </svg>
         </div>
      )
   }
}

export class DevNav extends React.Component {
   constructor(props) {
      super(props);
   }

   render () {
      return (
         <div id={this.props.id}>
            <svg width="100%" height="100%" viewBox="0 0 300 450" preserveAspectRatio="xMidYMid meet">
               <a xlinkHref="/developer#about">
                  <text x="75" y="225" transform="rotate(-30 -225,225)" textAnchor="start" fill="black">
                     About
                     <animate 
                        id="visible" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur="1ms" 
                        begin="0s" 
                        fill="freeze"
                        ref="visible"/>
                     <animateTransform 
                        id="slideIn1" 
                        attributeName="transform" 
                        type="rotate" 
                        from="180 -225, 225" 
                        to="-30 -225,225" 
                        dur="1s" 
                        begin="visible.end" />
                  </text>
               </a>
               <a xlinkHref="/developer#tellme">
                  <text x="75" y="225" transform="rotate(-15 -225,225)" textAnchor="start" fill="black">
                     Projects
                     <animate 
                        id="visible2" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur="1ms" 
                        begin="visible.end" 
                        fill="freeze"/>
                     <animateTransform 
                        id="slideIn2" 
                        attributeName="transform" 
                        type="rotate" 
                        from="180 -225, 225" 
                        to="-15 -225,225" 
                        dur="1s" 
                        begin="visible.end" />
                  </text>
               </a>
               <a xlinkHref="/developer#techanddebate">
                  <text x="75" y="225" transform="rotate(0 -225, 225)" textAnchor="start" fill="black">
                     Tech &amp; Debate
                     <animate 
                        id="visible3" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur="1ms" 
                        begin="visible.end" 
                        fill="freeze"/>                
                     <animateTransform 
                        id="slideIn3" 
                        attributeName="transform" 
                        type="rotate" 
                        from="180 -225, 225" 
                        to="0 -225,225" 
                        dur="1s" 
                        begin="visible.end" />
                  </text>
               </a>
               <a xlinkHref="/developer#blog">
                  <text x="75" y="225" transform="rotate(15 -225,225)" textAnchor="start" fill="black">
                     Blog
                     <animate 
                        id="visible4" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur="1ms" 
                        begin="visible.end" 
                        fill="freeze"/>
                     <animateTransform 
                        id="slideIn4" 
                        attributeName="transform" 
                        type="rotate" 
                        from="180 -225, 225" 
                        to="15 -225,225" 
                        dur="1s" 
                        begin="visible.end" />               
                  </text>
               </a>
               <a xlinkHref="/developer#contact">
                  <text x="75" y="225" transform="rotate(30 -225,225)" textAnchor="start" fill="black">
                     Contact
                     <animate 
                        id="visible5" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur="1ms" 
                        begin="visible.end" 
                        fill="freeze"/>               
                     <animateTransform 
                        id="slideIn5" 
                        attributeName="transform" 
                        type="rotate" 
                        from="180 -225, 225" 
                        to="30 -225,225" 
                        dur="1s" 
                        begin="visible.end" />               
                  </text>
               </a>
            </svg>
         </div>
      )
   }
}