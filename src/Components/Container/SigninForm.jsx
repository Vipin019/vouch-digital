import React,{useEffect, useState} from 'react'
import "./SigninForm.css";
import { Button } from "antd";
import axios from "axios";

const SigninForm = () => {

  const [datas, setData]=useState([{
    email: '',
    passward: ''
  }])

  useEffect(() =>{
    fetch("https://agile-lowlands-63767.herokuapp.com/api/login").then(res=>{
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes=>setData(jsonRes))
  })

  function onSubmit(){
    const enteredEmail=document.getElementById("email").value
    const enteredPassward=document.getElementById("passward").value
    const len=datas.length
    for(var i=0;i<len;i++){
      if(enteredEmail===datas[i].email && enteredPassward===datas[i].passward){
        alert("Login successfully")
        break;
      }
      if(i==len-1){
        if(window.confirm("login unsuccess, do you want to signup with email: "+enteredEmail+" and passward: "+enteredPassward)){
          const regestred = {
            email: enteredEmail,
            passward: enteredPassward
          };
          axios
      .post("https://agile-lowlands-63767.herokuapp.com/api/login", regestred)
      .then((res) => console.log(res.data));

          alert("Signup Successfully")
          
        }
      }
    }
  }

  return (
    <div id="signinForm">
      <div className="heading ccs">
        <h1>
          Welcome Back <br /> <small>Subtitle text goes here</small>
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="email ccs">
          <input
            type="text"
            placeholder="Email Address*"
            required="true"
            id="email"
          />
        </div>
        <div className="passward ccs">
          <input
            type="text"
            placeholder="Passward*"
            required="true"
            id="passward"
          />
        </div>
        <div className="loginbtn ccs">
          <input type="submit" value="Login" />
        </div>
        <div className="bottom">
          <div className="bottom__checkBox">
            <input type="checkbox" name="" id="checkBox" />
            <label htmlFor="checkBox">Remember Passward</label>
          </div>
          <div className="bottom__forgetPassward">
            <a><small>Forget Passward ?</small></a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
