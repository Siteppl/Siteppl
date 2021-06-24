import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import logo from '../Images/sp.png'

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
      <div className="mainwrapper2">
     <div className="sp-wrap">
        <img className="sp-pic" src={logo} alt="site ppl logo"></img>
        </div>
        <div className="col1">
          
        <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
        </ul>
          
        </div>
        

      <form className="jawn"  name="quote" method="post">
      <input type="hidden" name="form-name" value="quote" />
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
         
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          fName={this.state.fName}
          lName={this.state.lName}
          
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          company={this.state.company}
          industry={this.state.industry}
          purpose={this.state.purpose}
          orders={this.state.orders}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
          phone={this.state.phone}
        />

        {/* {this.previousButton()}
        {this.nextButton()} */}
        <div className="quotes2">
      <div id='footercol1'>
      <Link to="./users" style={{ textDecoration: 'none', color: "lightgray"}}>
      <div > 
        Work
      </div>
      </Link>
      <Link to="./team" style={{ textDecoration: 'none', color: "lightgray"}}>
      <div > 
        Team
      </div>
      </Link>
      <Link to="./contact" style={{ textDecoration: 'none', color: "lightgray"}}>
      <div > 
        Contact
      </div>
      </Link>
      </div>

      <div id='footercol2'>
      <Link to="./quote" style={{ textDecoration: 'none', color: "lightgray"}}>
      <div >
        Quote
      </div>
      </Link>
      <Link to="./team" style={{ textDecoration: 'none', color: "lightgray"}}>
      <div >
        Newsletter
      </div>
      </Link>
      <div >&copy; Site ppl Co.
      </div>
      </div>
    </div>
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
    <form id="msform" name="quote" method="post">
    <input type="hidden" name="form-name" value="quote" />
    <fieldset>
    
              <h2 className="fs-title">Hey! Welcome to Site PPL.</h2>
              <h3 className="fs-subtitle">What's your name?</h3>
              <input type="text" name="fName" placeholder="First Name" value={props.fName}
        onChange={props.handleChange} />
              <input type="text" name="lName" placeholder="Last Name" value={props.lName}
        onChange={props.handleChange}/>
               <h2 className="fs-title">Details</h2>
    
    <h3 className="fs-subtitle">Tell us a little about yourself.</h3>
    <input type="text" name="company" placeholder="Company Name" value={props.company}
        onChange={props.handleChange}/>
    <input type="text" name="industry" placeholder="Industry" value={props.industry}
        onChange={props.handleChange}/>
    <textarea name="purpose" placeholder="Describe the purpose for your new site."value={props.purpose}
        onChange={props.handleChange}></textarea>
    <input type="text" name="orders" placeholder="Avg. Online Orders Per Day (if applicable)" value={props.orders}
        onChange={props.handleChange}/>
    <h2 className="fs-title">Contact</h2>
              <h3 className="fs-subtitle">How can we reach you?</h3>
              <input type="text" name="email" placeholder="Email" value={props.email}
        onChange={props.handleChange}/>
              <input type="text" name="phone" placeholder="Phone" value={props.phone}
        onChange={props.handleChange}/>
        <button type="submit" className="btn btn-success btn-block">Sign up</button>
              
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
    <form  id="msform" netlify="true">
     <fieldset>
     
             
          </fieldset>
          </form>
    
    </React.Fragment>
  );
}