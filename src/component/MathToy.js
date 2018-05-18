import React,{Component} from 'react';
import './MathToy.css';
import Aux from '../utility/Aux';
class MathToy extends Component {
   constructor(props){
      super(props);
      this.state={
        history:[props.mathArr],
        current:props.mathArr,
        selectedIndex:1
      };
     
   }
  componentWillReceiveProps(nextProps) {
    this.setState({history:[nextProps.mathArr],current:nextProps.mathArr,selectedIndex:null});
  }
  setSelectedIndex(i) {
     this.setState({selectedIndex:i}); 
  }
  move(offset){
    if (this.state.selectedIndex+offset<0 ||this.state.selectedIndex+offset>=this.state.current.length) return;
    const arr=[...this.state.current];
    let temp=arr[this.state.selectedIndex+offset];
    arr[this.state.selectedIndex+offset]=arr[this.state.selectedIndex];
    arr[this.state.selectedIndex]=temp;
    this.setState((preState)=>({selectedIndex:preState.selectedIndex+offset,current:arr}));
  }
  addParenthesis(offset) {
   if(this.state.current.indexOf("(")!==-1 && offset===-1) { alert("左括号已经有了，不能再加了！");return;} 
   if(this.state.current.indexOf(")")!==-1 && offset===1) { alert("右括号已经有了，不能再加了！");return;}
    const {current,selectedIndex}=this.state;
    const arr=offset===-1?[...current.slice(0,selectedIndex),"(",...current.slice(selectedIndex)]:[...current.slice(0,selectedIndex+1),")",...current.slice(selectedIndex+1)];
    this.setState({current:arr});
  }
  addLeadingPlus(){
    const {current,selectedIndex}=this.state;
    if(current[0]==="+") {alert("表达式开始符号已经是加号，不可以再添加加号了！");return;}
    const arr=["+",...current];
    this.setState({current:arr,selectedIndex:0});
  }
  delMark(){
    const {current,selectedIndex}=this.state;
    if(selectedIndex===0 && current[0]==="+" || ["(",")"].includes(current[selectedIndex])) {
      const arr=[...current.slice(0,selectedIndex),...current.slice(selectedIndex+1)];
      this.setState({current:arr,selectedIndex:null});
      
    }
    else {
     alert("只可以删除开始加号，左括号或右括号，其他符号不可以删除！");
      return;
      
    }
  }
  calculate(){
   const {history,current,selectedIndex} = this.state;
    let arr,newHis,result;
    if(current.indexOf("(")>=0) {
      const left=current.indexOf("(");
      const right=current.indexOf(")");
      if(right<0||right<left){alert("括号数量与位置有问题，不能计算");return;}
      newHis=[...history,current];
      result=eval(current.slice(left,right+1).join(""));
      arr=[...current.slice(0,left),""+result,...current.slice(right+1)];
      //this.setState({current:arr,selectedIndex:null});
    }
    else{
      if(current[0]==="+"){alert("计算前请把开始加号去掉！");return;}
      if(current.length<3){alert("当前显示的已经是最终计算结果");return;}
      newHis=[...history,current];
      result=eval(current.slice(0,3).join(""));
      arr=[""+result,...current.slice(3)];
    }
    
      if(result<0){alert("小数不能直接减大数，请想办法移动位置后再计算");return}
      this.setState({history:newHis,current:arr,selectedIndex:null});

    
  }
  changeSign(){
   const {current,selectedIndex}=this.state;
    if(["+","-"].includes(current[selectedIndex])) {
      const arr=[...current.slice(0,selectedIndex),current[selectedIndex]==="+"?"-":"+",...current.slice(selectedIndex+1)];
      this.setState({current:arr});
    }
    else {
      alert("只能对+ 和 -号改符号！");
      return
    }
  }
  compare(){
    const {current,history}=this.state;
    try{
      if(eval(current.join(""))===eval(history[0].join(""))) return 1;
      return 0;
    }
    catch(e){
      return -1;
    }
  }
  render(){
    const {history,current,selectedIndex}=this.state;
    const res=this.compare();
    return current.length===0?null:<div className="container">
      {history.map((x,i)=>(<div className={"expression"} key={i}>{i>0?["="].concat(x).join(""):x.join("")}</div>))}
      <div className='toyContainer'>
      <pre>=</pre>
      {this.state.current.map((x,i)=>(
       <div 
           key={i} 
           className={this.state.selectedIndex===i?"selected":null}
           onClick={()=>{this.setSelectedIndex(i)}}
    
    
    >{x} </div>))}
      
      </div>
      <div className={res===1?"right":res===0?"wrong":"invalid"}>{res===1?"当前算式是对的！":res===0?"当前算式改错了！":"当前算式根本没法计算！！"}</div>
<div className="controls">
<button onClick={()=>{this.move(-1);}}>&larr;</button>
<button onClick={()=>{this.move(1);}}>&rarr;</button>
<button onClick={()=>{this.addParenthesis(-1)}}>左边加左括号</button>
<button onClick={()=>{this.addParenthesis(1)}}>右边加右括号</button>
<button onClick={()=>{this.addLeadingPlus()}}>表达式开始加加号</button>
<button onClick={()=>{this.delMark()}}>删除符号</button>
<button onClick={()=>{this.changeSign()}}>更改符号</button>
<button disabled={res!==1} onClick={()=>{this.calculate()}}>计算</button>
</div>
</div>
  }
  
}
export default MathToy;