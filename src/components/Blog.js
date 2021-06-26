import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import { motion } from "framer-motion";
import Example from './Example'

import { useRef } from "react";

import { wrap } from "@popmotion/popcorn";






 function Blog()  {

  
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
     

  const xOffset = 100;
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? xOffset : -xOffset,
      opacity: 0
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -xOffset : xOffset,
      opacity: 0
    })
  };
    
  const pages = [0, 1, 2, 3, 4];
    
  const PageSlider = ({ currentPage, setPage, direction }) => {
    /* Add and remove pages from the array to checkout 
       how the gestures and pagination animations are 
       fully data and layout-driven. */
    const hasPaginated = useRef(false);
    
    function detectPaginationGesture(e, { offset }) {
      if (hasPaginated.current) return;
      let newPage = currentPage;
      const threshold = xOffset / 2;
    
      if (offset.x < -threshold) {
        // If user is dragging left, go forward a page
        newPage = currentPage + 1;
      } else if (offset.x > threshold) {
        // Else if the user is dragging right, 
        // go backwards a page
        newPage = currentPage - 1;
      }
    
      if (newPage !== currentPage) {
        hasPaginated.current = true;
        // Wrap the page index to within the 
        // permitted page range
        newPage = wrap(0, pages.length, newPage);
        setPage(newPage, offset.x < 0 ? 1 : -1);
      }
    }
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
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="Site ppl">Site ppl</span></Link></li> 
        
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
          <motion.div
          key={this.currentPage}
          className="slide"
          data-page={this.currentPage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={this.detectPaginationGesture}
          onDragStart={() => (this.hasPaginated.current = false)}
          onDragEnd={() => (this.hasPaginated.current = true)}
          // Snap the component back to the center
          // if it hasn't paginated
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // This will be used for components to resolve all 
          // other variants, in this case initial and animate.
          custom={this.direction}
        />
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
          