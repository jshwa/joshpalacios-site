import React from 'react';

export const DebateNav = props => {
   return (
      <div id={props.id} style={{justifySelf: 'end'}}>
         <svg width="100%" height="100%" viewBox="0 0 300 600" preserveAspectRatio="xMidYMid meet">
            <text x="225" y="325" transform="rotate(30 500,325)" text-anchor="end" fill="white">
               About
            </text>
            <text x="225" y="325" transform="rotate(15 500,325)" text-anchor="end" fill="white">
               Contention 1
            </text>
            <text x="225" y="325" transform="rotate(0 500,325)" text-anchor="end" fill="white">
               Coaching
            </text>
            <text x="225" y="325" transform="rotate(345 500,325)" text-anchor="end" fill="white">
               Public Speaking
            </text>
            <text x="225" y="325" transform="rotate(330 500,325)" text-anchor="end" fill="white">
               Contact
            </text>
         </svg>
      </div>
   )
}

export const DevNav = props => {
   return (
      <div id={props.id} style={{justifySelf: 'start'}}>
         <svg width="100%" height="100%" viewBox="0 0 300 600" preserveAspectRatio="xMidYMid meet">
            <text x="75" y="325" transform="rotate(330 -225,325)" text-anchor="start" fill="white">
               About
            </text>
            <text x="75" y="325" transform="rotate(345 -225,325)" text-anchor="start" fill="white">
               Portfolio
            </text>
            <text x="75" y="325" transform="rotate(0 -225, 325)" text-anchor="start" fill="white">
               Technical Stuff
            </text>
            <text x="75" y="325" transform="rotate(15 -225,325)" text-anchor="start" fill="white">
               Resume
            </text>
            <text x="75" y="325" transform="rotate(30 -225,325)" text-anchor="start" fill="white">
               Contact
            </text>
         </svg>
      </div>
   )
}
