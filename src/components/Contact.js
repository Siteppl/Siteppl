import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';




export default class Contact extends Component {

    
      render() {
        
        return (
            <div>

            <Helmet>
            <link rel="stylesheet" href="Contact.css" />
            </Helmet>

            <main>
            
            <div class="mainwrapper2">
            
                <div class="col1">
                    <ul className="topleft">
                        <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
                        <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
                        <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
                        <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
                    </ul>
                </div>
                
                <div class="col2con"> 
                    <h1  class="mainbanner">contact</h1>
                
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <div class="containerform">
                            <div class="row100">
                                <div class="col">
                                    <div class="inputBox">
                                        <input type="text" name="firstname" required="required"/>
                                        <span class="text">First Name</span>
                                        <span class="line"></span>
                                    </div>
                            
                                </div>
                            
                                <div class="col">
                                    <div class="inputBox">
                                        <input type="text" name="lastname" required="required"/>
                                        <span class="text">Last Name</span>
                                        <span class="line"></span>
                                    </div>
                            
                                </div>
                        
                            </div>
                
                            <div class="row100">
                                <div class="col">
                                    <div class="inputBox">
                                        <input type="text" name="email" required="required"/>
                                        <span class="text">Email</span>
                                        <span class="line"></span>
                                    </div>
                                
                                </div>
                                
                                <div class="col">
                                    <div class="inputBox">
                                        <input type="text" name="mobile" required="required"/>
                                        <span class="text">Mobile</span>
                                        <span class="line"></span>
                                    </div>
                                
                                </div>
                            
                            </div>
                
                            <div class="row100">
                                <div class="col">
                                    <div class="inputBox textarea">
                                        <textarea name="message" required="required"></textarea>
                                        <span class="text">Type Your Message Here...</span>
                                        <span class="line"></span>
                                    </div>
                                
                                </div>
                            
                            </div>
                            
                            <div class="row100">
                                <div class="col">
                                    <button type="submit" value="Send">Submit</button>
                                </div>
                            
                            </div>
                
                        </div>
                
                    </form>
                
                </div>
            
                <div class="col3">
                <div class="svg-wrapper">
                    <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
                    <rect class="shape" height="60" width="225"></rect>
                    </svg>
                    <div class="quotes">
                    <span onclick="transitionToPage('quote.html')">free quote
                    </span>
                    </div>
                    
                </div>
                
                </div>
              
            </div>
            <div className="quotes3">
      <div id='footercol1'>
      <Link to="./home" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Home
      </div>
      </Link>
      <Link to="./work" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Work
      </div>
      </Link>
      <Link to="./team" style={{ textDecoration: 'none', color: "white"}}>
      <div > 
        Team
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
           
            </main>  
            </div>
            )
            }}