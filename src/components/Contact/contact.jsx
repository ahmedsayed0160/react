import React from "react";
import style from "./Contact.module.css";

export default function contact() {
  return (
    <>
      <div className="vh-100 p-4">
       <div >
    <h1 className={`  ${style.portf}`}>conatct section</h1>
    </div>

    <div>
    <h4 ><i className= {`  fa-solid fa-star ${style.starto} `}></i></h4>
    
  </div>
    <div className="container d-flex flex-column w-50 mx-auto gap-5 p-5">
      <input type="userName" placeholder="userName" class="input-box">
      </input>
      <input type="userAge" placeholder="userAge" class="input-box">
      </input>
      <input type="userEmail" placeholder="userEmail" class="input-box">
      </input>
      <input type="userPassword" placeholder="userPassword" class="input-box">
      </input>
      <button className="btn btn-info w-25">Send Message</button>
    </div>
      </div>
      
    </>
  );
}
