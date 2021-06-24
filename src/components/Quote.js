import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import sal from 'sal.js'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      fName:  '',
      lName: '',
      company: '',
      industry: '', 
      purpose: '',
      orders: '', 
      email: '', 
      phone: '',   
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { fName, lName, company, industry, purpose, orders, email, phone } = this.state
    console.log( fName )
    alert(`Your registration detail: \n 
           First Name: ${fName} \n 
           Last Name: ${lName} \n
           Company: ${company} \n
           Industry: ${industry} \n
           Purpose: ${purpose} \n
           Orders per day: ${orders} \n
           Email: ${email} \n
           Phone: ${phone} \n`)
  }
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="yeet" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="yeet float_right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
  render() {    
    return (
      <React.Fragment>
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
          
          
          
           
             
            
              <ul class="lil-nav">
              <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
         <li><Link to='./Quote' style={{ textDecoration: 'none' }} ><span  data-text="contact">quote</span></Link></li> 
              </ul>
            
           
            
            
          
          
        </div>
        

      <form className="jawn" onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </div>
      </React.Fragment>
    );
  }
}
function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <form  id="msform" netlify>
    <fieldset>
              <h2 class="fs-title">Hey! Welcome to Site PPL.</h2>
              <h3 class="fs-subtitle">What's your name?</h3>
              <input type="text" name="fName" placeholder="First Name" value={props.fName}
        onChange={props.handleChange} />
              <input type="text" name="lName" placeholder="Last Name" value={props.lName}
        onChange={props.handleChange}/>
              
          </fieldset>
          </form>
  );
}
function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    
    <form  id="msform" netlify>
    <fieldset>
    
    <h2 class="fs-title">Details</h2>
    
    <h3 class="fs-subtitle">Tell us a little about yourself.</h3>
    <input type="text" name="company" placeholder="Company Name" value={props.company}
        onChange={props.handleChange}/>
    <input type="text" name="industry" placeholder="Industry" value={props.industry}
        onChange={props.handleChange}/>
    <textarea name="purpose" placeholder="Describe the purpose for your new site."value={props.purpose}
        onChange={props.handleChange}></textarea>
    <input type="text" name="orders" placeholder="Avg. Online Orders Per Day (if applicable)" value={props.orders}
        onChange={props.handleChange}/>
   
</fieldset>
</form>
  );
}
function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <form  id="msform" netlify>
     <fieldset>
              <h2 class="fs-title">Contact</h2>
              <h3 class="fs-subtitle">How can we reach you?</h3>
              <input type="text" name="email" placeholder="Email" value={props.email}
        onChange={props.handleChange}/>
              <input type="text" name="phone" placeholder="Phone" value={props.phone}
        onChange={props.handleChange}/>
        <button type="submit" className="btn btn-success btn-block">Sign up</button>
              
          </fieldset>
          </form>
    
    </React.Fragment>
  );
}