import React, { Component } from 'react'

export class aboutUs extends Component {
    render() {
        return (
            <div  style={{display: 'block',position:"absolute",  justifyContent:'center', alignItems:'center', height: '100vh', width:"100%", textAlign:"center"}}>
                <div className="about" style={{margin:'50px'}}>
               <h1 style={{ fontWeight: 'bold' },{fontSize : "40px"}}>About FindSimran</h1>
               <p style={{fontSize : "20px"}}><span style={{fontWeight:'bold'}}>Welcome to FindSimran</span>, the peer to peer network of nerds, where you can find your coding partner or search relevant projects to work on.</p>
               </div>


               <div  className="vision" style={{margin:'50px'}}>
               <h1 style={{ fontWeight: 'bold' },{fontSize : "30px"}}>Vision</h1>
               <p style={{fontSize : "20px"}}>
               Create a platform to collaborate in others idea to enhance your skills and make open source contribution.</p>
               </div>


               <div  className="mision" style={{margin:'50px'}}>
               <h1 style={{ fontWeight: 'bold' },{fontSize : "30px"}}>Mission</h1>
               <p style={{fontSize : "20px"}}><span style={{fontWeight:'bold'}}>The mission of FindSimran is simple</span>: connect Coders globally to make them more productive and successful.</p>
               </div>


               <div  className="developers" style={{margin:'50px'}}>
               <h1 style={{ fontWeight: 'bold' },{fontSize : "30px"}}>Who Are We?</h1>
               <p style={{fontSize : "20px"}}><span style={{fontWeight:'bold'}}>FindSimran</span> is an initiative started in october 2021 by <span style={{fontWeight:'bold'}}>Prajal Patidar</span> and <span style={{fontWeight:'bold'}}>Diksha Patidar</span> with an aim of easing to find peer programmers
                   to make their ideas transform into code.</p>
               </div>
            </div>
        )
    }
}

export default aboutUs