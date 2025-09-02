import React from 'react'
import style from "./Portfolio.module.css"
import port1 from "../../assets/imgi_1_poert1.png"
import port2 from "../../assets/imgi_2_port2.png"
import port3 from "../../assets/imgi_3_port3.png"
import { useState } from 'react'


export default function Portfolio() {

  let [show, setShow] = useState(null)
  function showimg(img) {
    setShow(img)
  }
  function hide() {
    setShow(null)
  }





  return<>
   <div  className="">
    <div>
    <h1 className={` mt-5 ${style.portf}`}>portfolio component</h1>
    </div>

    <div>
    <h3 ><i className= {`  fa-solid fa-star ${style.starto} `}></i></h3>
    
  </div>
 </div>

   


  <div className="container vh-100 position-relative">
    <div className="row  ">
      <div className={`col-md-4 mb-5 ${style.img}`}>
        <img src={port1} alt="" className={`w-100 ${style.img}`} />
        <div className={`${style.layer}` }  onClick={() => showimg(port1)}> <i className={`fa-solid fa-plus ${style.add}`}></i></div>
      </div>


      <div className={`col-md-4 mb-5 ${style.img}`}>
        <img src={port2} alt="" className={`w-100 ${style.img}`} />
        <div className={`${style.layer}`} onClick={() => showimg(port2)}> <i className={`fa-solid fa-plus ${style.add}` } > </i></div>
      </div>
      <div className={`col-md-4 mb-5 ${style.img}`}>
        <img src={port3} alt="" className={`w-100 ${style.img}`} />
        <div className={`${style.layer}` } onClick={() => showimg(port3)}> <i className={`fa-solid fa-plus ${style.add}`}></i></div>
      </div>
      <div className={`col-md-4 mb-5 ${style.img}`}>
        <img src={port1} alt="" className={`w-100 ${style.img}`} />
        <div className={`${style.layer}`} onClick={() => showimg(port1)}> <i className={`fa-solid fa-plus ${style.add}`}></i></div>
      </div>
      <div className={`col-md-4 mb-5 ${style.img}`}>
        <img src={port2} alt="" className={`w-100 ${style.img}`} />
        <div className={`${style.layer}`} onClick={() => showimg(port2)}> <i className={`fa-solid fa-plus ${style.add}`}></i></div>
      </div>
      <div className={`col-md-4 mb-5 ${style.img}`}>
        <img src={port3} alt="" className={`w-100 ${style.img}`} />
        <div className={`${style.layer}`} onClick={() => showimg(port3)}> <i className={`fa-solid fa-plus ${style.add}`}></i></div>
      </div>
    </div>
    
  </div>
  
    {show && (
        <div
          className=" position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center z-3"
          onClick={hide}
        >
          <img
            src={show}
            alt="Selected Portfolio Image"
            className="selected-image img-fluid"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
  </>
}
