import React from "react";
import style from "./About.module.css";
export default function About() {
  return (
    <>
      <div className={style.Aboat}>
        <span className={style.captel}>about component</span>
        <h2 className={style.h1}>
          <i className={` fa-solid fa-star ${style.startt}`}></i>
        </h2>
       <div className="container ">
        <div className="row text-white ">
          <div className="col-md-6 ">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className="col-md-6 ">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>
       </div>
      </div>

    </>
  );
}
