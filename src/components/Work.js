import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import { motion } from "framer-motion";
import Example from './Example'



export default class Work extends Component {

  componentDidMount() {
    sal({
      
      once: true,
    })
  }

  
    render() {
     
      return (
        
        <div >
    
        <Helmet>
        <link rel="stylesheet" href="Work.css" />
        <meta
      name="description"
      content="Our collection of websites, apps, and games we have built or collaborated on "
    />
    <title>Site ppl / Work</title>
    
        </Helmet>

        <div className="containersnap">
        <div className="mainwrapper"
        >
          
          <div className="col1">
            
          <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li>
         <li><Link to='./quote' style={{ textDecoration: 'none' }} ><span  className="hiddenq"data-text="quote">quote</span></Link></li> 
        </ul>
            
                  
         
            
          </div>
          

          
          <div className="col2"> 
            <h1 className="mainbanner">work</h1>
            {/* <div className="center-con">
              <div className="round">
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
                
              </div>
              
            </div> */}
            
          </div>
          
              
          
          <div className="col3">
            <div  className="svg-wrapper">
              <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="225"></rect>
              </svg>
                <div className="quotes">
                <Link to='./quote' style={{ textDecoration: 'none', color: 'white'}}><span>free quote
              </span></Link>
                </div>
                
            </div>
            
          </div>
          
          </div>
      
    
      
      <div className="sectionsnap">
        <div className="contentsnap">
          <div id="text"  data-sal="fade"
                  data-sal-duration="1000"
                  >Projects</div>
                  <div className="example-container">
                    
                  </div>
          <div className="containerpro">
            <div className="cardspro"
            data-sal="slide-right" 
            >
              <div className="layerpro"></div>
              <div className="layerpro"></div>
              <div className="layerpro"></div>
              <div className="layerpro">
                <div className="contentpro">
                  <h2>Retail</h2>
                  <p>Create your own online retail / e-commerce experience.</p>
                </div>
                
              </div>
              
            </div>
            
            <div className="cardspro2"
            data-sal="fade" 
            >
              <div className="layerpro2"></div>
              <div className="layerpro2"></div>
              <div className="layerpro2"></div>
              <div className="layerpro2">
                <div className="contentpro2">
                  <h2>Entertainment</h2>
                  <p>Media and social apps created to build a lasting community</p>
                </div>
                
              </div>
              
            </div>
           
            <div className="cardsprofin"
            data-sal="slide-left" 
            >
              <div className="layerprofin"></div>
              <div className="layerprofin"></div>
              <div className="layerprofin"></div>
              <div className="layerprofin">
                <div className="contentprofin">
                  <h2>Financial</h2>
                  <p>Payment and blockchain applications built for the future of finance. </p>
                </div>
                
              </div>
              
            </div>
           
          </div>
          
          
         
          <div className="containerpro3"
           >
            <div className="cardspro3">
              <div className="layerpro3"></div>
              <div className="layerpro3"></div>
              <div className="layerpro3">
                <div className="contentpro3">
                  <h2>Our Services</h2>
                  <p data-sal="slide-down"
                  data-sal-duration="2000"
                  data-sal-easing="easeInQuint">Designing and Building</p>
                  <p data-sal="slide-left"
                  data-sal-duration="2000"
                  data-sal-easing="easeInQuint">Front-end & back-end development</p>
                  <p data-sal="slide-right"
                 data-sal-duration="2000"
                  data-sal-easing="easeInQuint">Mobile app development</p>
                  <p data-sal="slide-up"
                  data-sal-duration="2000"
                  data-sal-easing="easeInQuint"> Marketing + Branding</p>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <motion.div
  
 
  whileTap={{ scale: 0.95 }}
><Link to="./quote">
      <div id="endtextwrap">
          <div  id="textunder1" >Create yours today -{'>'}</div>
          </div>
          </Link>
</motion.div>
      
      <div className="sectionsnap">
        <div className="contentsnap">
          <div  id="textC" data-text="Our apps">Our apps</div>
          <div  id="textunder" >Created and developed by our team</div>
          <motion.div
  
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
<div id="textA" data-sal="slide-right"
                  data-sal-duration="2000"
                  data-sal-delay="700"
                  data-sal-easing="easeInQuint"><a href='https://tomsdeli.netlify.app'>Ordering app</a></div>
</motion.div>
<motion.div
  
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
<Link to="./blog" style={{ textDecoration: 'none', color: "white"}}>
      <div id="textA" data-sal="slide-left"
                  data-sal-duration="2000"
                  data-sal-delay="700"
                  data-sal-easing="easeInQuint">
        Site ppl Blog
      </div>
      </Link>
      </motion.div>
      <motion.div
  
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
<Link to="./projectwesley" style={{ textDecoration: 'none', color: "white"}}>
<div id="textA" data-sal="slide-right"
                  data-sal-duration="2000"
                  data-sal-delay="700"
                  data-sal-easing="easeInQuint"><a >Project Wesley</a></div>
                  </Link>
</motion.div>
          {/* <div id="textB" data-text="Appointment system"><a href='#'>Appointment system</a></div> */}
          
        </div>
        
      </div>
      <div className="sectionsnap">
        <div className="contentsnap">
          <div  id="textC" data-text="Our apps">Our Clients</div>
          <div  id="textunder" >Teams and companies we have partnered with </div>
      

  <p id="textA2">Coming Soon:</p>
  <motion.div
  
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  
<div id="textA3" data-sal="slide-right"
                  data-sal-duration="2000"
                  data-sal-delay="700"
                  data-sal-easing="easeInQuint"><a>Trident Restoration</a></div>
                  
                  </motion.div>         
                  <motion.div
  
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  
<div id="textA3" data-sal="slide-right"
                  data-sal-duration="2000"
                  data-sal-delay="700"
                  data-sal-easing="easeInQuint"><a>Reclaim Construction</a></div>
                  
                  </motion.div>      
  


          {/* <div id="textB" data-text="Appointment system"><a href='#'>Appointment system</a></div> */}
          
        </div>
        
      </div>
      <div className="quotes3">
      <div id='footercol1'>
      <Link to="./home" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Home
      </div>
      </Link>
      <Link to="./team" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Team
      </div>
      </Link>
      <Link to="./contact" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Contact
      </div>
      </Link>
      </div>

      <div id='footercol2'>
      <Link to="./quote" style={{ textDecoration: 'none', color: "white"}}>
      <div >
        Quote
      </div>
      </Link>
      <Link to="./blog" style={{ textDecoration: 'none', color: "white"}}>
      <div >
        Blog
      </div>
      </Link>
      <Link to="./team" style={{ textDecoration: 'none', color: "white"}}>
      <div >
        Newsletter
      </div>
      </Link>
      <div >&copy; Site ppl Co.
      </div>
      </div>
    </div>

    </div>
        </div>
      )}}