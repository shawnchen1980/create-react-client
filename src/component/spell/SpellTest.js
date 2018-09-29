import React,{Component} from 'react';

class SpellTest extends Component {
  constructor(props){
    super(props);
    this.state={
      chars:Array.from(props.word,()=>{return "?"})
    };
    
    this.handleChange=this.handleChange.bind(this);
  }
  
  handleChange(e){
    
    let str=e.target.value;
    let str2=this.state.chars.join("");
    let index=[...str].findIndex((k,i)=>{return str.slice(0,i)+str.slice(i+1)===str2})
    
    if(index!==-1){
      this.setState(preState=>{return {chars:preState.chars.map((k,i)=>{return this.props.word.charAt(i)===str[index]?str[index]:k})};})
    }
  }
  render(){
    return <div>
        <h1>{this.props.hint}</h1>
        <input value={this.state.chars.join("")}  onChange={this.handleChange}/>
      </div>
  }
}

export default SpellTest;

//usage:
//<SpellTest word="hello" hint="你好"/>
//https://create-react-client.glitch.me/spell