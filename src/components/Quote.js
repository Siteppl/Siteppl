import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import sal from 'sal.js'





export default class Contact extends Component {

    
      render() {
        
        return (

<main>
            <Helmet>
            <link rel="stylesheet" href="Quote.css" />
            </Helmet>
      <div class="mainwrapper2">
        
        <div class="col1">
          
        <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
        </ul>
          
          
          <div class="screen">
            <header>
             
              <a class="target-burger">
                <ul class="buns">
                  <li class="bun"></li>
                  <li class="bun"></li>
                </ul>
               
              </a>
             
            </header>
            <nav class="lil-nav" role="navigation">
              <ul>
                <li><span onclick="transitionToPage('index.html')" data-text="intro">intro</span></li>
                <li><span onclick="transitionToPage('work.html')" data-text="work">work</span></li>
                <li><span onclick="transitionToPage('team.html')" data-text="team">team</span></li>
                <li><span onclick="transitionToPage('contact.html')" data-text="contact">contact</span></li>
                <li><span class="active"onclick="transitionToPage('quote.html')">quote</span></li>
              </ul>
            </nav>
            
          </div>
          
        </div>
          
        <form  id="msform" netlify>
          
          <ul id="progressbar">
              <li class="active">Name</li>
              <li>Details</li>
              <li>Contact</li>
          </ul>
         
          <fieldset>
              <h2 class="fs-title">Hey! Welcome to Site PPL.</h2>
              <h3 class="fs-subtitle">What's your name?</h3>
              <input type="text" name="email" placeholder="First Name" />
              <input type="text" name="pass" placeholder="Last Name" />
              <input type="button" name="next" class="next action-button" value="Next" />
          </fieldset>
          <fieldset>
              <h2 class="fs-title">Details</h2>
              <h3 class="fs-subtitle">Tell us a little about yourself.</h3>
              <input type="text" name="twitter" placeholder="Company Name" />
              <input type="text" name="facebook" placeholder="Industry" />
              <textarea name="purpose" placeholder="Describe the purpose for your new site."></textarea>
              <input type="text" name="gplus" placeholder="Avg. Online Orders Per Day (if applicable)" />
              <input type="button" name="previous" class="previous action-button" value="Previous" />
              <input type="button" name="next" class="next action-button" value="Next" />
          </fieldset>
          <fieldset>
              <h2 class="fs-title">Contact</h2>
              <h3 class="fs-subtitle">How can we reach you?</h3>
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="phone" placeholder="Phone" />
              <input type="button" name="previous" class="previous action-button" value="Previous" />
              <input type="submit" name="submit" class="submit action-button" value="Submit" />
          </fieldset>
        </form>
        
      </div>
     
    </main>

        )}}