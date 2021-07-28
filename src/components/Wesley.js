import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import sal from 'sal.js'








export default class Project extends Component {

 

  componentDidMount() {
    sal({
      
      once: false,
    })
  }


    render() {
    return(
        <div>
            <Helmet>
            <link rel="stylesheet" href="Project.css" />
            <meta
      name="description"
      content="The founders and team that runs Site ppl Co."
    />
    <title>Site ppl / Team</title>
            </Helmet>


        <div id="project" 
         style={{
          backgroundImage: 'url(./manwalking.jpg)',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          height: "150vh",
          width: "100%",
          color: "#f5f5f5"
        }}>
           <ul className="topleft">
         <li><Link to='./users' style={{ textDecoration: 'none' }} ><span className="active"  data-text="Sp">Sp</span></Link></li> 
        
        </ul>
        <h1  className="mainbannerproject"><span data-sal="slide-right"
                  data-sal-duration="2000"
                  data-sal-delay="400"
                  data-sal-easing="easeInQuint">Project </span><span data-sal="slide-left"
                  data-sal-duration="2000"
                  data-sal-delay="600"
                  data-sal-easing="easeInQuint"id="wes">Wesley</span></h1>
       <p className="p" 
       data-sal="fade-in"
       data-sal-duration="2000"
       data-sal-delay="800"
       data-sal-easing="easeInQuint"> A Virtual Universe </p>
       <p className="p" data-sal="fade-in"
       data-sal-duration="2000"
       data-sal-delay="1000"
       data-sal-easing="easeInQuint"> Coming 2024 </p>
        </div>






</div> 
    )}}