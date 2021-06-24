import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import '../App.css'
import { motion, useViewportScroll, useTransform } from "framer-motion";







export default class Home extends Component {

  componentDidMount() {
    sal({
      threshold: .5,
      once: false,
    })
    
  }
  

    render() {
      
      return (
        <div >
        
       


    <body id="home">
    <div className="mainwrapper">
      
      <div className="col1">
        
        <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
        </ul>
        
        </div>
      
      
      <div className="col2">
        <h1  data-sal="fade-down"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" className="mainbanner">site ppl</h1>
        
        {/* <div className="center-con">
          <div className="round">
            <div id="cta">
              <span className="arrow primera next "></span>
              <span className="arrow segunda next "></span>
            </div>
            
          </div>
          
        </div> */}
        
      </div>
      
      <div className="colsvg">
        <div  className="svg-wrapper">
          <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="225"></rect>
          </svg>
            <div className="quotes">
              <Link to='./quote' style={{ textDecoration: 'none', color: 'white' }}><span>free quote
              </span></Link>
            </div>
            
        </div>
        
      </div>
      
    </div>

    <div className='body'>

  
      <div className="containerabout">
      <div className="imgwrapper">
      
            <svg data-sal="slide-right" data-sal-duration="1000" width="44px" height="44px" className="path"viewBox="0 0 128 128">
<path fill="transparent" stroke="#fff" stroke-width="1" fill="lightblue" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345V90.089l-16.297-6.503zm34.276 0l-15.073 5.739V110.9l15.073-6.121V83.586zm17.979-68.551L61.73 19.931l10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224L75.654 28.5v21.652l13.466-6.121V22.762zM19.306 46.047L7.907 50.944l10.558 4.514 12.241-4.514-11.4-4.897zM2.168 52.168l-.382 22.034 16.679 7.345V58.671L2.168 52.168zm34.275 0l-15.071 5.738V79.48l15.071-6.12V52.168zm19.587-6.937l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345V57.855l-16.296-6.503zm34.275 0L58.096 57.09v21.576l15.072-6.121V51.352zm35.908-36.317l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344V27.658l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12V21.156z"></path>
</svg>

<svg  data-sal-delay="500" data-sal="slide-right" data-sal-duration="1000" width="44px" height="44px" viewBox="0 0 128 128">
<path fill="white" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
</svg>
<svg data-sal-delay="650" data-sal="slide-right" data-sal-duration="1000" width="44px" height="44px" viewBox="0 0 128 128">
<path fill="lightblue" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
</svg>
<svg   data-sal-delay="750"data-sal="slide-right" data-sal-duration="1000" width="44px" height="44px" viewBox="0 0 128 128">
<g fill="white"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
</svg>
<svg   data-sal-delay="1000"data-sal="slide-right" data-sal-duration="1000" width="44px" height="44px"viewBox="0 0 128 128">
<path  fill="lightblue" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
</svg>
</div>
          <div className="imgbx">
            {/* <img src="Images\top.png" alt="Creator Image"/> */}
            <h3><span data-sal="slide-down" data-sal-duration="1000">A</span> <span data-sal="slide-down" data-sal-duration="1500" data-sal-delay="500">Digital</span> <span data-sal="slide-down" data-sal-delay="1000" data-sal-duration="2000">Agency</span></h3>
        
          </div>
       
          <div data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce"className="contentabout">
                  
            <p >We are builders of digital assets, including websites, mobile apps, libraries, dapps, games, and more.</p>
          </div>
          <div data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="1000"
                data-sal-easing="easeInBounce" className="contentabout2">
                  
                  <p >The digital world is constantly evolving, and the creator economy is growing daily. Create revenue streams doing what you love today and escape the reins of modern work days. </p>
          </div>
          <div data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="1000"
                data-sal-easing="easeInBounce"className="contentabout3">
            <p >Get a <Link to='./quote' style={{ textDecoration: 'none' }}><span id="quote">free quote</span></Link>, or <Link to='./contact' style={{ textDecoration: 'none' }}><span id="contact">contact us</span></Link> now.</p>
          </div>
          
        </div>
        
        
      </div>
      
  
    
    {/* <ul className='mid'>
    <hr  id='line1'/>
    <h2 id="textf">Creating, growing, and maintaining digital assets</h2>
    <hr  id='line1'/>



    </ul> */}

    <div className='body2'>
      <div  className="containerabout2">
        
            <h3 data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce">Designers</h3>
                
            <img  data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" src="Images\drip.svg" alt="Designer Image"/>
          
          
          <div className="contentabout">
            <p data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="1000"
                data-sal-easing="easeInBounce">As designers, we strive to build frameworks that can be easily transferred into real applications. We focus on making design clean, sleek, and intuitive to help firms differentiate from there competitors.</p>
          </div>
          
        
          </div>
        <div data-sal="fade-down"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInCirc"className="containerdesign">
          <a id='ux' data-text='UX & UX'>UI & UX</a>
                      
        </div>
        
        
        </div>
    
    
    

    
    <div className='bodys'>
    
        <div data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="200"
                 className="containerdev">
          <div className="icondev" >
            <div className="contentdev">
              <a>Websites</a>
            </div>
           
          </div>
          
          <div className="icondev" >
            <div className="contentdev">
              <a>Security</a>
            </div>
            
          </div>
         
          <div  className="icondev" >
            <div  className="contentdev">
              <a >Apps</a>
            </div>
            
          </div>
          
          
        </div>
        
        <div className="containerabouts" >
            
            <h3 data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce">Developers</h3>
            <img data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" src="../Images/box.svg" alt="Developer Image"/>
          
         
          <div  data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" className="contentabout">
            <p  > As programmers, we are dedicated to creating applications that are fast and efficient. Our Integrations are unique and easy to adapt to. Let us handle the complex programming process for full stack apps </p>
          </div>
          
        
      
    </div>
    </div>





    <div className='body21'>
      <div data-sal="fade-left"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" className="containerabout21">
        
            <h3>SEO</h3>
            <img  src="Images\seo.png" alt="Designer Image"/>
          
          
          <div className="contentabout">
            <p >SEO has evolved into a complex strategy made of many moving parts that must work together as a unified brand experience. Brands also need to optimize for new features like voice search and featured snippets and ensure that everything is set up properly on the technical side.</p>
          </div>
          
        
          </div>
          <h2  class="plussign">&</h2>

          <div data-sal="fade-right"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" className="containerabouts1" >
          
          <h3>Marketing</h3>
          <img src="Images/market.png" alt="Developer Image"/>
        
       
        <div className="contentabout">
          <p >Online marketing is the practice of leveraging web-based channels to spread a message about a company’s brand, products, or services to its potential customers. The objective of marketing is to reach potential customers through the channels where they spend their time reading, searching, shopping, and socializing online.</p>
        </div>
        
      
    
  </div>
        
        
        </div>
    


        

    
    

    <div className="container">
    
    {/* <ul className="bottomnav">
    
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work </span></Link></li> 
         <li><span  data-text="-">- </span></li>
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><span  data-text="-">- </span></li>
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
         <li><span  data-text="-">- </span></li>
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="quote">quote</span></Link></li> 
        </ul> */}
      
    </div>
    


    

    <div className='body1'
    data-sal="slide-up" data-sal-duration="1000">
      <div className="containersocial">
        <div className="iconsocial" >
          <div className="contentsocial">
            <a href="https://twitter.com/Siteppl"><i className="fa fa-twitter"></i></a>
          </div>
         
        </div>
        
        <div  className="iconsocial" >
          <div className="contentsocial">
            <a href="https://www.instagram.com/siteppl/"><i className="fa fa-instagram"></i></a>
          </div>
          
        </div>
        
        <div className="iconsocial" >
          <div className="contentsocial">
            <a href="https://www.linkedin.com/company/site-ppl"><i className="fa fa-linkedin"></i></a>
          </div>
          
        </div>
        
        <div className="iconsocial" >
          <div className="contentsocial">
            <a href="https://dribbble.com/Siteppl"><i className="fa fa-dribbble"></i></a>
          </div>
          
        </div>
        
        <h2 id='socials'>Follow Us</h2>
      </div>
     
    </div>
    

    <div className="quotes2">
      <div id='footercol1'>
      <div > 
        Work
      </div>
      <div >
        Team
      </div>
      <div > 
        Contact
      </div>
      </div>
      <div id='footercol2'>
      <div >Quote
      </div>
      <div >Newsletter
      </div>
      <div >&copy; Site ppl Co.
      </div>
      </div>
    </div>


    
    <section>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </section>
    

    
    </body>
        </div>



    
    )}}