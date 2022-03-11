import React from 'react'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

export default function Footer() {
  return (
    <div>
      <h4 className="cabin">Casey Vaughn</h4>
      <div style={{display:"flex", justifyContent:"center"}}>
      <a href="https://www.linkedin.com/in/cvaughn555/">
        <img className="icon" src={linkedin} alt="linkedin logo"/>
      </a>
      <a href="https://github.com/caseyvaughn/">
        <img className="icon" src={github} alt="github logo" />
        </a>
        
        </div>
    </div>
  )
}
