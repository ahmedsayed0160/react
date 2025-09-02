import React from 'react'
import style from "./Home.module.css"
import Ahmed from "../../assets/imgi_1_avataaars.svg"

export default function Home() {
  return <>
    <div  className= {`w-100 vh-100 r ${style.hom} mx-auto pt-5`} >
      
      <img src= { Ahmed} alt="" className= {`  ${style.img}`} />
      
        <h1 className= {` ${style.capte}`}>start Framework</h1>
          <span> <h1><i className= {`  fa-solid fa-star ${style.start}`}></i></h1></span>
        <p className={` text-white ${style.pre}`}>Graphic Artist - Web Designer - Illustrator</p>
      
        
    </div>
    
 </>
}
