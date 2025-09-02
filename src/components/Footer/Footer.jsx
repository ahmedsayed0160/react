import React from 'react'
import style from "./Footer.module.css" 



export default function Footer() {
  return <>
    <div className={`${style.food}`}>
    <div className= {` container text-white   ${style.foot}`}>
   <div className="row">
    <div className="col-md-4 text-center">
      <div>
        <p className='font-weight-bold fs-1'>LOCATION</p>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
    </div>
    <div className="col-md-4 text-center ">
      <p className='font-weight-bold fs-1'>AROUND THE WEB</p>
       <ul className=' d-flex  gap-3  list-unstyled text-center  justify-content-center'>
        <div className={`rounded-circle border  d-flex justify-content-center align-items-center ${style.icon}`}>
          <i className="fa-brands fa-facebook rounded-circle"></i>
        </div>
        <li className={`rounded-circle border  d-flex justify-content-center align-items-center ${style.icon}`}>
          <i class="fa-brands fa-twitter"></i>
        </li>
        <li className={`rounded-circle border  d-flex justify-content-center align-items-center ${style.icon}`}>
          <i class="fa-brands fa-linkedin"></i>
        </li>
        <li className={`rounded-circle border  d-flex justify-content-center align-items-center ${style.icon}`}>
          <i class="fa-solid fa-globe"></i>
        </li>
       </ul>
    </div>
    <div className="col-md-4 text-center">
      <p className='font-weight-bold fs-1'>ABOUT FREELANCER</p>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
   </div>
    </div>
    </div>
    <div className= {` text-center p-3 ${style.cont}`}>
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
 
}
