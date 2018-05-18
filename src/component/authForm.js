import React from 'react';
import {reduxForm,Field} from 'redux-form';
const authForm=(props)=>{
  console.log(props);
  return    <form onSubmit={props.handleSubmit}>
        <div>
        <label htmlFor="email">Email:</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Field name="password" component="input" type="password" />
      </div>
      
      <button type="submit">Submit</button>
  <button onClick={(e)=>{e.preventDefault();props.signOut();}}>Log out</button>
        <div>user is <span>{props.user}</span> <br/>token is <span>{props.token}</span></div>
        </form>
      ;
}

export default reduxForm({form:"auth"})(authForm);