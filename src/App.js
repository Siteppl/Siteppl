import { Switch, Route, Redirect, withRouter, useHistory, useLocation } from 'react-router-dom';

import Home from './components/Home'
import {AnimatePresence, motion} from 'framer-motion'
import Main from './components/Main'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'
import Quote from './components/Quote'
import './Sal.css'

const pageVariants = {
    initial: {
      opacity: 0,
      
      
    },
    in: {
      opacity: 1,
      
    },
    out: {
      opacity: 0,
      
    }
  };
  
  const pageTransition = {
    ease: "easeOut",
    duration: 1,
  };
  const menuTransition = {
    ease: "easeOut",
    duration: 1.5,
    
  };
  

function App() {
  const location = useLocation();
  return (
    
        
    <AnimatePresence exitBeforeEnter>
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch location={location} key={location.pathname}>
    
      <Route path="/users">
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Work/>
                    </motion.div>
      </Route>
      <Route path="/team">
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Team/>
                    </motion.div>
      </Route>
      <Route path="/contact">
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Contact/>
                    </motion.div>
      </Route>
      <Route path="/quote">
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Quote/>
                    </motion.div>
      </Route>
      <Route path="/">
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Home/>
                    </motion.div>
      </Route>
      
      
    </Switch>
    </AnimatePresence>

  );
}


export default App;
