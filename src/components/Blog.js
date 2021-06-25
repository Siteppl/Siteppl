import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import { motion } from "framer-motion";
import Example from './Example'



 function Blog()  {

  
  
  
     
      return (
        
        <div >
    
        <Helmet>
        <link rel="stylesheet" href="Blog.css" />
        </Helmet>

        <div className="containersnap">
        <div className="mainwrapper"
        >
          
          <div className="col1">
            
          <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="Home">Home</span></Link></li> 
        
        </ul>
            
            <div className="screen">
              <header>
                
                <a className="target-burger">
                  <ul className="buns">
                    <li className="bun"></li>
                    <li className="bun"></li>
                  </ul>
                  
                </a>
                
              </header>
              <nav className="lil-nav" role="navigation">
                <ul>
                  <li><span onclick="transitionToPage('index.html')" data-text="intro">intro</span></li>
                  <li><span className="active"onclick="transitionToPage('work.html')" data-text="work">work</span></li>
                  <li><span onclick="transitionToPage('team.html')" data-text="team">team</span></li>
                  <li><span  onclick="transitionToPage('contact.html')" data-text="contact">contact</span></li>
                  <li><span onclick="transitionToPage('quote.html')">quote</span></li>
                </ul>
              </nav>
                  
            </div>
            
          </div>
          

          
          <div className="col2"> 
            <h1 className="mainbanner">Blog</h1>
            <p className="mainbannerp">a site ppl project</p>
            <div id="sub">
            <p id="script"> subscribe</p><input placeholder="email" className="signup" />
            </div>
            {/* <div className="center-con">
              <div className="round">
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
                
              </div>
              
            </div> */}
            
          </div>
          
              
          
          
          
          </div>
          </div>


          <div className="mainwrapper2">

          <div id="sub">
           <div  className="box" >
          <h3>Post 1</h3>

           </div>
            </div>




        </div>
          
          </div>
      )}

      export default Blog
          