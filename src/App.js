import React, { Component } from 'react';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import AuthForm from './component/authForm';
import ImageForm from './component/ImageForm';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import axios from 'axios';
import * as actions from './action';
import {connect} from 'react-redux';
import Profile from './container/Profile';
import Aux from './utility/Au';
import MathPane from './component/MathPane';
import SpellTest from './component/spell/SpellTest';
import TestSuite from './component/spell/TestSuite';
//import Keyboard from './component/spell/keyboard.js';
//import {bindActionCreator
import Beat from './component/beat';
class App extends Component {
 

  componentDidMount(){
    
  
  }
  render() {
    const {signInSubmit,user,token,signOut,imageUpload} =this.props;
    return (
      <BrowserRouter>
      <Aux>
      <Link to='/signin'>sign in</Link>
      <Link to='/getid'>get ID</Link>
      <Link to='/upload'>Upload</Link>
      <Link to='/toy'>MathPane</Link>
      <Link to='/beat'>Beat</Link>
      <Link to='/spell'>SpellTest</Link>
      <Link to='/test'>TestSuite</Link>
      <Switch>
      <Route path="/signin" render={()=> <AuthForm onSubmit={signInSubmit} user={user} token={token} signOut={signOut}/>} />
      <Route path="/getid" component={Profile} />
      <Route path="/upload" render={()=> <ImageForm onSubmit={imageUpload} />} />
      <Route path="/toy" render={()=> <MathPane />} />
      <Route path="/beat" render={()=><Beat subLength={1} length={2} unitDuration={500} />}/>
      <Route path="/spell" render={()=><SpellTest word="hello" hint="你好" />}/>
      <Route path="/test" render={()=><TestSuite />}/>
      </Switch>
    </Aux>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state)=>{
   return {
      user:state.auth.user,
     token:state.auth.token,
     userID:state.profile.userID
   }; 
}

export default connect(mapStateToProps,actions)(App);
