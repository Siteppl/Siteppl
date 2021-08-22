import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {Helmet} from 'react-helmet';


import { content } from "./Content";

const transition = { duration: 1, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition }
};

const Post = ({ match }) => {
  const id = Number(match.params.id);

  const { title, description, text, text2, imgSrc } = content[id];

  return (
      <div id="wrapper">
    <motion.div
      className="page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
         <Helmet>
    <link rel="stylesheet" href="Blog.css" />
    </Helmet>
      <div className="link-wrapper">
        <Link to="/blog">Back to Home page</Link>
      </div>
      <div className="post">
        <img className="post__img" src={imgSrc} alt={title} />
        <h1 className="heading">{title}</h1>
        <div id='date '>8 / 1 / 21</div>
        <p id="description">{description}</p>
        <p id="postdescrip">{text}</p>
        <hr/>
        <p id="postdescrip">{text2}</p>
      </div>
    </motion.div>
    </div>
  );
};

export default Post