import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import { motion } from "framer-motion";
import Example from './Example'
import { Carousel } from 'antd';


 function Blog()  {

  
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
     
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
            <h1 className="mainbanner">Sb</h1>
            <div className="mainwrapper3">
          <p className=" glitch">Tech,</p>
          <p className="glitch1">Startups,</p>
          <p className="glitch2">Software</p>
          </div>
            
            <div id="sub">
              
            <p id="script"> subscribe</p><input placeholder="email" className="signup" />
            
            </div>
            
           
            
          </div>
          
              
          
          
          
          </div>
          
          </div>
          <div className="mainwrapper3">
          <p className="mainbannerp">_Site ppl blogs_</p>
          </div>
          <div className="mainwrapper2">
            
          <p className="mainbannerp">Tech</p>
          <div id="sub">
         
           <div  className="box" >
     
          <h3>Post 1</h3>
          <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
           </div>
           <div  className="box" >
     
     <h3>Post 2</h3>
     <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
      </div>
      <div  className="box" >
     
     <h3>Post 3</h3>
     <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
      </div>
     
      
            </div>
          



        </div>


        <div className="mainwrapper2">
          <p className="mainbannerp">Crypto</p>
          <div id="sub">
         
           <div  className="box" >
     
          <h3>Post 1</h3>
          <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
           </div>
           <div  className="box" >
     
     <h3>Post 2</h3>
     <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
      </div>
     
     
      
            </div>
          



        </div>
          



        <div className="mainwrapper2">
          <p className="mainbannerp">Dev Ops</p>
          <div id="sub">
         
           <div  className="box" >
     
          <h3>Post 1</h3>
          <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
           </div>
           <div  className="box" >
     
     <h3>Post 2</h3>
     <div className="contentc">
<p id="post">uowevbnownv
oiwenvoi
wenve
woin
voweinvoiwenviowen</p>
</div>
      </div>
     
     
      
            </div>
          



        </div>




          </div>
      )}

      export default Blog
          