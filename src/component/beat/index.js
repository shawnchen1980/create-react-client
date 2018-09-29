import React,{Component} from 'react'
import Aux from '../../utility/Au';
import './beat.css';
let audioCtx= new (window.AudioContext || window.webkitAudioContext||AudioContext)();
// if(window.AudioContext){
//   audioCtx=new window.AudioContext();
// }
// else{
//   audioCtx=new window.webkitAudioContext();
// }
const pitch={c3:130.6	,c3s:138.6,	d3:146.85,	d3s:155.55,	e3:164.8,	f3:174.6,	f3s:185,	g3:196,	g3s:207.65,	a3:220,	a3s:233.1,	b3:246.95,
c4:261.6,c4s:277.2,d4:293.7,d4s:311.1,e4:329.6,f4:349.2,f4s:370.0,g4:392,g4s:415.3,a4:440,a4s:466.2,b4:493.9,c5:523.3,d5:587.3,e5:659.3,f5:698.4,g5:784,a5:880,b5:987.8};
const Beat=(props)=>{
  const {subLength,beatLength,length,counter,on,osc,pitches}=props;
  
  
  const classList=counter % beatLength < subLength ? ("on box"):("box");
  const beat=Math.floor((counter % length) / beatLength)+1;
  osc.frequency.value=pitches[beat-1];
  //osc.type='triangle';
  //osc.start(0);
  if (classList.includes("on") && on && osc) {
    osc.connect(audioCtx.destination)
  }
  else if(osc){
    osc.disconnect()
  }
  
  //console.log(counter,length,beatLength,subLength);
  return <div className={classList}>{beat}</div>;
}

class BeatPad extends Component{
  constructor(props) {
    super(props);
    const osc = audioCtx.createOscillator();
    // osc.frequency.value=261.6;
     osc.type =  'triangle';
     osc.start(0);
    const osc2 = audioCtx.createOscillator();
    // osc2.frequency.value=523.3;
     osc2.type =  'triangle';
     osc2.start(0);
     this.state={
       counter:0,
       on:false,
       osc,
       osc2
       
     }
  }
  handleSwitch(){
    const {unitDuration}=this.props;
    this.setState((preState)=>({on:!preState.on}))
     if(!this.timer){
        this.timer=setInterval(()=>{this.setState((preState)=>({counter:preState.counter+1}))},unitDuration) 
     }
    else{
     clearInterval(this.timer);
      this.timer=null;
    }
  }
  handleKeyDown(){
      if(this.state.counter%3<1){console.log(`左手第${Math.floor((this.state.counter%12)/3)+1}拍`)}
  }
  render(){
    //const {subLength}=this.props; 
    return <Aux><button onClick={()=>{this.handleSwitch()}} onKeyDown={(e)=>{e.preventDefault();this.handleKeyDown();}} >Switch</button>
    <input type="range" min="0" max="100" step="10" onChange={(e)=>{console.log(e.target.value)}}/>
    <Beat subLength={1} beatLength={3} length={12} counter={this.state.counter} frequency={261.6} on={this.state.on} osc={this.state.osc} pitches={[pitch.a5,pitch.g5,pitch.f5,pitch.e5]}/>
    <Beat subLength={1} beatLength={4} length={12} counter={this.state.counter} frequency={523.3} on={this.state.on} osc={this.state.osc2} pitches={[pitch.g3,pitch.a3s,pitch.c4]}/></Aux>
  }
}
                
export default BeatPad;