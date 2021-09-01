import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {Helmet} from 'react-helmet';
import { Button } from 'antd'
import { content } from "./Content";
import FadeIn from 'react-fade-in';





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

const PostPreview = ({ id, title, description, imgSrc, author, date }) => {
  return (

    <Link id='postlink'  to={`/post/${id}`}>
    <motion.div className="post-preview" variants={postPreviewVariants}>
      <img className="post-preview__img" src={imgSrc} alt={title} />
      <div className="post-preview__text">
        <h2 className="posttitle">{title}</h2>
        <div className="post-preview__row">
        <p className="post-preview__author">{author}</p>
        <p className="post-preview__date">{date}</p>
        </div>
        <p>{description}</p>
        <Link id='postlink' to={`/post/${id}`}>Learn more</Link>
      </div>
    </motion.div>
    </Link>
  );
};



const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
};

const Blog = () => {
const [allData, setAllData] = useState(content);
const [filteredData,setFilteredData] = useState(allData);


useEffect(() => {
  
  
}, [])




const handleSearch = ( event ) =>{
  
  let value = event.target.value.toLowerCase();
  let result = [];
  console.log(value)
  result = allData.filter((data) => {
  return data.title.search(value) !== -1;

  });
  setFilteredData(result);
}

const handleFilter = ( data ) =>{
  console.log(data)
  let value = data.toLowerCase();
  let result = [];
  console.log(value)
  result = allData.filter((data) => {
  return data.title.search(value) !== -1;

  });
  setFilteredData(result);
 
}

const handleAll = ( ) =>{
  
  setFilteredData(allData);
 
}





  return (
    <body>
        <Helmet>
    <link rel="stylesheet" href="Blog.css" />
    <meta
      name="description"
      content="An archive of blogs and posts on how the modern monkey can navigate the ever-evolving digital and financial world."
    />
    <title>Site Blogs / Content for the Modern Monkey</title>
    </Helmet>
    <div id="wrapper">
    
      
    <div className="containersnap">
        <div className="mainwrapper"
        >
          
          <div className="col1">
            
          <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="Sp">Sp</span></Link></li> 
        
        </ul>
            
     <p className="mainbannerpfeat">Feat.</p>
     <FadeIn delay={2000} transitionDuration={2000}>
     <div className="box">
        
        <h1 className="headingfeat">Digital Agencies</h1>
        <p> why digital agencies will be the future in the fields of design and development
        </p>
        <Link to={`/post/0`}>Read more</Link>
      </div>
      </FadeIn>

      <FadeIn delay={2500} transitionDuration={2000}>
      <div className="box">
        
        <h1 className="headingfeat">Coming soon</h1>
        <p> 
        </p>
        <Link to={`/post/2`}></Link>
      </div>
      </FadeIn>
      <FadeIn delay={3000} transitionDuration={2000}>
      <div className="box">
        
        <h1 className="headingfeat">Coming soon</h1>
        <p> 
        </p>
        <Link to={`/post/3`}></Link>
      </div>
      </FadeIn>
          </div>
          

          
          <div className="col2"> 
            <h1 className="mainbanner ">Sb</h1>
            <p className="glitch">Site blogs</p>
            <div className="mainwrapper3">
            
        
        
          <div className="descriptwrap">
          <p className="mainbannerpsmall">An archive of blogs and posts on how the modern monkey can navigate the ever-evolving digital and financial world.</p>
          </div>
          <img id="monkey" src="Images/monkey.png"/>
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
         

          
         
          <p className="mainbannerplarge">The Collection</p>
          <div id="search">
          <label id="">Search:</label>
          <input type="text" placeholder='search' className="signup" onChange={(event) =>handleSearch(event)} />
          <div id="filter">
          <Button className="filteroptions" onClick={() => {handleAll()}}>All Posts</Button>
          <Button className="filteroptions" onClick={() => {handleFilter("tech")}}>Tech</Button>
          <Button className="filteroptions" onClick={() => {handleFilter("problem")}}>Crypto</Button>
          <Button className="filteroptions" onClick={() => {handleFilter("problem")}}>Startups</Button>
          </div>
          </div>
          <div  className="page">
          
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
         
        {filteredData.map((post) => (
        <PostPreview key={post.id} {...post} />  
        ))}
      
      </motion.div>



    </div>

<div id="footer">

  {/* <Button className="signup">View All </Button> */}
</div>

    
<section>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </section>

    
         
        
   
    </div>
    </body>
  );
};

export default Blog 