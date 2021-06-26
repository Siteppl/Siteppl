import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import { motion } from "framer-motion";
import Example from './Example'



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
            
     
            
          </div>
          

          
          <div className="col2"> 
            <h1 className="mainbanner ">Sb</h1>
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
          