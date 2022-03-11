import React from 'react'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import wordle from "../assets/wordle.png"

export default function Footer() {
  return (
    <div className="bg-light" style={{display:"flex", justifyContent:"center", marginBottom:"20px", padding:"10px"}}>
      <a href="https://www.nytimes.com/games/wordle/index.html">
        <img className="icon" src={wordle} alt="wordle logo"/>
      </a>
      <h4 className="cabin"
        style={{ paddingTop: "10px", paddingLeft:"20px", borderLeft:"3px solid black" }}>Casey Vaughn</h4>
      <a href="https://www.linkedin.com/in/cvaughn555/">
        <img className="icon" src={linkedin} alt="linkedin logo"/>
      </a>
      <a href="https://github.com/caseyvaughn/">
        <img className="icon" src={github} alt="github logo" />
      </a>
    </div>
  )
}
