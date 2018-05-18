import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import axios from 'axios';
class ImageForm extends Component {
  constructor(props){
    super(props);
    this.state={file:null};
  }
  uploadImage(file){
    console.log(file);
    axios.get("/getuploadurl").then(res=>{console.log("url is :",res.data); return axios.put(res.data,file,{headers:{"Content-Type":"image/jpeg"}})}).then(()=>{console.log("done");});
  }
  onSubmit(e){
    e.preventDefault();
    console.log(e.target.files);
    this.uploadImage(this.state.file);
  }
  onChange(e){
     console.log(e.target.files);
    console.log("hello");
    this.setState({file:e.target.files[0]});
  }
  render(){
    return    <form onSubmit={this.onSubmit.bind(this)}>
          <div>
          <label htmlFor="image">Image:</label>
          <input name="image"  type="file" accept="image/*" onChange={this.onChange.bind(this)} />
        </div>
        <div>

        </div>

        <button type="submit">Submit</button>

          </form>
        ;
    
  }
}

export default (ImageForm);