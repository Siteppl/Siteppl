import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import sal from 'sal.js'








export default class Team extends Component {

 

  componentDidMount() {
    sal({
      
      once: false,
    })
  }


    render() {
    return(
        <div>
            <Helmet>
            <link rel="stylesheet" href="Team.css" />
            <meta
      name="description"
      content="The founders and team that runs Site ppl Co."
    />
    <title>Site ppl / Team</title>
            </Helmet>

    <div  class="mainwrapper">
      <div class="col1">
        
      <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
         <li><Link to='./quote' style={{ textDecoration: 'none' }} ><span  className="hiddenq"data-text="quote">quote</span></Link></li>
        </ul>
        
        
      
        
          
    
       
      </div>
      
      <div class="col2">
        <h1 class="mainbanner">team</h1>
        <div class="center-con">
          {/* <div class="round">
            <div id="cta">
              <span class="arrow primera next "></span>
              <span class="arrow segunda next "></span>
            </div>
            
          </div> */}
          
        </div>
       
      </div>
     
      <div class="col3">
        <div class="svg-wrapper">
          <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="225"></rect></svg>
            <div class="quotes">
            <Link to='./quote' style={{ textDecoration: 'none', color: 'white'}}><span>free quote
              </span></Link>
            </div>
            
        </div>
    
      </div>
      
    </div>
   
    
    
    <div class='text'>
    <hr data-sal="slide-right"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce"
                id="linetop"/> 
                
      <div class='under'><div id="sizedup">We are digital asset creators.</div>
                  <div className="sized-down" data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" > This entails the creation of applications in the fields of full stack web and mobile apps, blockchain development, data science and analysis, and anything that can create wealth on the web.
       Our team creates and manages applications built by us, and built by our clients. We work to develop value within every pocket of the web today.</div>
      </div>
      </div>
      
   
    
    <div class="container2">
    <h2 id="texti">Architect</h2>


    <div id="nameg">
    <hr data-sal="slide-right"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" id='line1'/>


    <div id="socialsg">
    <h3  id="textg">Gavin Henderson / Co-founder</h3>
    <ul class="socials">
      
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce"><a href="https://www.twitter.com/gavinmhenderson"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="700"
                data-sal-easing="easeInBounce"><a href="https://www.henderson.onl"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="800"
                data-sal-easing="easeInBounce"><a href="https://www.linkedin.com/in/gavin-henderson-8851981b1/"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="1000"
                data-sal-easing="easeInBounce"><a href="https://www.instagram.com/gavinmhenderson"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
    </ul>
  </div>
  </div>


  <div id="undercontainer"> 
    <p class='underg'>A computer programmer and data scientist, Gavin builds efficient codebases and algorithms for applications and programs. Working with the python and JavaScript languages, he builds applications for the web, mobile, and IoT. He has also developed algorithms for machine learning and data science projects.
      

      
      </p>
    </div>
      
      <h2  data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce"class="plussign">+</h2>
    </div>
 




<div class="container3">
  
  <h2 id="textk">Creator</h2>

  <div id="namet">

    <div id="socialst">
    <h3 id="textdesc">Tyler Smith / Co-founder</h3>
    <ul class="socials">
      
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce"><a href="https://twitter.com/Smith_t7"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="700"
                data-sal-easing="easeInBounce"><a href="https://tylersmith.digital"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="900"
                data-sal-easing="easeInBounce"><a href="https://www.linkedin.com/in/tylersmith77/"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
      <li data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="1000"
                data-sal-easing="easeInBounce"><a href="https://www.instagram.com/smith7t/"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
    </ul>
  </div>
  <hr data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="500"
                data-sal-easing="easeInBounce" id='line2'/>
  
</div>



<div id="undercontainer"> 
  <p class='underg'>A creator of code, design, and media.  
    I am a full stack programmer, working with the JavaScript and python languages. I create and maintain applications in any industry open for innovation, and work to ensure our applications are built intuitively and securely.
  
    </p>
  </div>
  </div>



  
  
    <div className="container4">

    <div class="contactForm">
      <form  name="newsletter" method="post">
      <input type="hidden" name="form-name" value="newsletter" />
        <h2 id='textcomm'>Join the community</h2>
        
        <div class="inputBox">
          <input type="email" name="email" placeholder="Email" required="required"/>
          
        </div>
        
        <div class="inputBox">
          <input type="submit" value="Send"/>
        </div>
      </form>


      
    </div>
  
    <div class="newsletter">
    
    <p class='underc'>Join our newsletter to get updates on projects, deals, and the building of the digital world.
    
    
    </p>

      
    </div>

   
    </div>
    
    

    <div className="quotes3">
      <div id='footercol1'>
      <Link to="./home" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Home
      </div>
      </Link>
      <Link to="./users" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Work
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
      <Link to="./team" style={{ textDecoration: 'none', color: "white"}}>
      <div >
        Newsletter
      </div>
      </Link>
      <div >&copy; Site ppl Co.
      </div>
      </div>
    </div>

    <section>
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>



        </div>
    )
    
    
    }


}