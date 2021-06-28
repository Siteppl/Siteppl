import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {Helmet} from 'react-helmet';


import { content } from "./Content";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition }
};



const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition }
};

const PostPreview = ({ id, title, description, imgSrc }) => {
  return (

    
    <motion.div className="post-preview" variants={postPreviewVariants}>
      <img className="post-preview__img" src={imgSrc} alt={title} />
      <div className="post-preview__text">
        <h2 className="posttitle">{title}</h2>
        <p>{description}</p>
        <Link to={`/post/${id}`}>Learn more</Link>
      </div>
    </motion.div>
    
  );
};

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
};

const Blog = () => {
  return (
    <div id="wrapper">
    
        <Helmet>
    <link rel="stylesheet" href="Blog.css" />
    </Helmet>
    <div className="containersnap">
        <div className="mainwrapper"
        >
          
          <div className="col1">
            
          <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="- Sp -">- Sp -</span></Link></li> 
        
        </ul>
            
     <p className="mainbannerpfeat">Feat.</p>
     <div className="box">
        
        <h1 className="heading">Rational Optimism</h1>
        <p> the idea being rational and optimistic can be vital
        </p>
        
      </div>
      <div className="box">
        
        <h1 className="heading">Rational Optimism</h1>
        <p> the idea being rational and optimistic can be vital
        </p>
        
      </div>
      <div className="box">
        
        <h1 className="heading">Rational Optimism</h1>
        <p> the idea being rational and optimistic can be vital
        </p>
        
      </div>
          </div>
          

          
          <div className="col2"> 
            <h1 className="mainbanner ">Sb</h1>
            <p className="glitch">Site blogs</p>
            <div className="mainwrapper3">
            <div id="glitchcontainer">
         <p className=" mainbannerp">Tech,</p>
          <p className="mainbannerp">Startups,</p>
          <p className="mainbannerp">Software,</p>
          </div>
          <div id="glitchcontainer2">
         <p className="mainbannerp">Growth,</p>
          <p className="mainbannerp">Innovation,</p>
          <p className="mainbannerp">Creation,</p>
          </div>
          <div id="glitchcontainer2">
         <p className="mainbannerp">Business,</p>
          <p className="mainbannerp">Finance,</p>
          <p className="mainbannerp">Capital</p>
          </div>
          <p className="mainbannerpsmall">An archive of blogs and posts on the ever-evolving digital and financial world.</p>
          </div>
            
            <div id="sub">
              
            <p id="script"> subscribe</p><input placeholder="email" className="signup" />
            
            </div>
            
           
            
          </div>
          
              
          <div className="col3">
              <img className="robot" src="Images/robot.png"/>
          </div>
          
          
          </div>
          
          </div>
         

          
         
          <p className="mainbannerp">Tech</p>
          
          <div className="page">
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
         
        {content.map((post) => (
          <PostPreview key={post.id} {...post} />
        ))}
       
      </motion.div>

    </div>

 
         
        
   
    </div>
    
  );
};

export default Blog 