import React from 'react';

export class DebateNav extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.refs.visible.beginElement()
   }

   render () {
      return (
         <div id={this.props.id} style={{justifySelf: 'end'}}>
            <svg width="100%" height="100%" viewBox="0 0 300 600" preserveAspectRatio="xMidYMid meet">
               <text x="225" y="325" transform="rotate(30 500,325)" text-anchor="end" fill="white">
                  About
                  <animate 
                        id="visible" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur=".1s" 
                        begin="indefinite" 
                        fill="freeze"
                        ref="visible"/>
                     <animateTransform 
                        id="slide1" 
                        attributeName="transform" 
                        type="rotate" 
                        from="-180 500,325" 
                        to="30 500,325" 
                        dur="1s" 
                        begin="visible.end" />
               </text>
               <text x="225" y="325" transform="rotate(15 500,325)" text-anchor="end" fill="white">
                  Contention 1
                  <animate 
                        id="visiblef2" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur=".1s" 
                        begin="visible.end" 
                        fill="freeze"/>
                     <animateTransform 
                        id="slide2" 
                        attributeName="transform" 
                        type="rotate" 
                        from="-180 500,325" 
                        to="15 500,325" 
                        dur="1s" 
                        begin="visible.end" />
               </text>
               <text x="225" y="325" transform="rotate(0 500,325)" text-anchor="end" fill="white">
                  Coaching
                  <animate 
                        id="visiblef3" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur=".1s" 
                        begin="visible.end" 
                        fill="freeze"/>
                     <animateTransform 
                        id="slide3" 
                        attributeName="transform" 
                        type="rotate" 
                        from="-180 500,325" 
                        to="0 500,325" 
                        dur="1s" 
                        begin="visible.end" />
               </text>
               <text x="225" y="325" transform="rotate(-15 500,325)" text-anchor="end" fill="white">
                  Public Speaking
                  <animate 
                        id="visiblef4" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur=".1s" 
                        begin="visible.end" 
                        fill="freeze"/>
                     <animateTransform 
                        id="slide4" 
                        attributeName="transform" 
                        type="rotate" 
                        from="-180 500,325" 
                        to="-15 500,325" 
                        dur="1s" 
                        begin="visible.end" />
               </text>
               <text x="225" y="325" transform="rotate(-30 500,325)" text-anchor="end" fill="white">
                  Contact
                  <animate 
                        id="visiblef5" 
                        attributeName="visibility" 
                        from="hidden" 
                        to="visible" 
                        dur=".1s" 
                        begin="visible.end" 
                        fill="freeze"/>
                     <animateTransform 
                        id="slide5" 
                        attributeName="transform" 
                        type="rotate" 
                        from="-180 500,325" 
                        to="-30 500,325" 
                        dur="1s" 
                        begin="visible.end" />
               </text>
            </svg>
         </div>
      )
   }
}

export class DevNav extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      console.log("dev mounted")
   }

   render () {
      return (
         <div id={this.props.id} style={{justifySelf: 'start'}}>
            <svg width="100%" height="100%" viewBox="0 0 300 600" preserveAspectRatio="xMidYMid meet">
               <text x="75" y="325" transform="rotate(-30 -225,325)" text-anchor="start" fill="white">
                  About
                  <animate 
                     id="visible" 
                     attributeName="visibility" 
                     from="hidden" 
                     to="visible" 
                     dur=".1s" 
                     begin="0s" 
                     fill="freeze"
                     ref="visible"/>
                  <animateTransform 
                     id="slideIn1" 
                     attributeName="transform" 
                     type="rotate" 
                     from="180 -225, 325" 
                     to="-30 -225,325" 
                     dur="1s" 
                     begin="visible.end" />
               </text>
               <text x="75" y="325" transform="rotate(-15 -225,325)" text-anchor="start" fill="white">
                  Technical Skills
                  <animate 
                     id="visible2" 
                     attributeName="visibility" 
                     from="hidden" 
                     to="visible" 
                     dur=".1s" 
                     begin="visible.end" 
                     fill="freeze"/>
                  <animateTransform 
                     id="slideIn2" 
                     attributeName="transform" 
                     type="rotate" 
                     from="180 -225, 325" 
                     to="-15 -225,325" 
                     dur="1s" 
                     begin="visible.end" />
               </text>
               <text x="75" y="325" transform="rotate(0 -225, 325)" text-anchor="start" fill="white">
                  Portfolio
                  <animate 
                     id="visible3" 
                     attributeName="visibility" 
                     from="hidden" 
                     to="visible" 
                     dur=".1s" 
                     begin="visible.end" 
                     fill="freeze"/>                
                  <animateTransform 
                     id="slideIn3" 
                     attributeName="transform" 
                     type="rotate" 
                     from="180 -225, 325" 
                     to="0 -225,325" 
                     dur="1s" 
                     begin="visible.end" />
               </text>
               <text x="75" y="325" transform="rotate(15 -225,325)" text-anchor="start" fill="white">
                  Resume
                  <animate 
                     id="visible4" 
                     attributeName="visibility" 
                     from="hidden" 
                     to="visible" 
                     dur=".1s" 
                     begin="visible.end" 
                     fill="freeze"/>
                  <animateTransform 
                     id="slideIn4" 
                     attributeName="transform" 
                     type="rotate" 
                     from="180 -225, 325" 
                     to="15 -225,325" 
                     dur="1s" 
                     begin="visible.end" />               
               </text>
               <text x="75" y="325" transform="rotate(30 -225,325)" text-anchor="start" fill="white">
                  Contact
                  <animate 
                     id="visible5" 
                     attributeName="visibility" 
                     from="hidden" 
                     to="visible" 
                     dur=".1s" 
                     begin="visible.end" 
                     fill="freeze"/>               
                  <animateTransform 
                     id="slideIn5" 
                     attributeName="transform" 
                     type="rotate" 
                     from="180 -225, 325" 
                     to="30 -225,325" 
                     dur="1s" 
                     begin="visible.end" />               
                  </text>
            </svg>
         </div>
      )
   }
}