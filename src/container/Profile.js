import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../action';
class Profile extends Component {
  componentDidMount(){
    this.props.getID(this.props.token);
  }
  render(){
    return <div>the current user id is {this.props.userID}</div>
  }
  
}

const mapStateToProps = (state)=>{
 return {
   token:state.auth.token,
   userID:state.profile.userID
 }; 
}

export default connect(mapStateToProps,actions)(Profile);