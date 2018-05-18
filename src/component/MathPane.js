import React,{Component} from 'react';
import MathToy from './MathToy';
import Aux from '../utility/Aux';
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
      ),
    []
  );
};
class MathPane extends Component {
 constructor(props){
  super(props); 
   this.state={mathArr:[]};
 }
  handleClick(){
   //alert(this.el.value); 
    if(!/^\d*([\+|\-]\d*)+$/.test(this.el.value)) {alert("输入表达式内容不符合要求，需要重新输入");return;}
    //alert(this.el.value.split(/[+|-]/));
    //alert(this.el.value.split(/\d+/).slice(1,-1));
    let arra=this.el.value.split(/[+|-]/);
    let arrb=this.el.value.split(/\d+/).slice(1,-1);
    let arrc=[];
    arrb.forEach((x,i)=>{arrc.push(arra[i]);arrc.push(arrb[i]);})
    arrc.push(arra[arra.length-1]);
    //alert(arrc);
    this.setState({mathArr:arrc});
  }
  
  generateExpression(){
     let a=Math.ceil(Math.random()*10)*100;
     let b=Math.ceil(Math.random()*a);
     a=a-b;
     let c=Math.ceil(Math.random()*10)*100;
     let d=Math.ceil(Math.random()*100);
     c=c+d;
    let arr=permutations([a,b,c,d]);
    let num=Math.floor(24*Math.random());
    let eq=[arr[num][0]+"",Math.random()>0.5?"+":"-",arr[num][1]+"",Math.random()>0.5?"+":"-",arr[num][2]+"",Math.random()>0.5?"+":"-",arr[num][3]+""];
    this.setState({mathArr:eq});
    //console.log(eq);
  }
  
  render(){
   
    return <Aux>
      <input ref={(el)=>{this.el=el}} />
      <button onClick={()=>{this.handleClick()}}>设置</button>
 <button onClick={()=>{this.generateExpression()}}>生成题目</button>
      <MathToy mathArr={this.state.mathArr} />
      </Aux>
    
  }
}
export default MathPane;