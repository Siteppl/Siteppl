import { Switch, Route, Redirect, withRouter, useHistory, useLocation } from 'react-router-dom';

import Home from './components/Home'
import {AnimatePresence, motion} from 'framer-motion'
import Main from './components/Main'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'
import Quote from './components/Quote'
import Blog from './components/Idk'
import Post from './components/Idk2'
import Project from './components/Wesley'
import './Sal.css'
import AnimatedCursor from "react-animated-cursor"
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';


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
    delay: .8
  };
  const menuTransition = {
    ease: "easeOut",
    duration: 1.5,
    
  };
  

function App() {
  const location = useLocation();

  const history = createBrowserHistory();


history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});



  return (
    
        
    <AnimatePresence exitBeforeEnter initial={false}>
    <AnimatedCursor
      innerSize={30}
      outerSize={10}
      color='255, 255, 255'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={5}
    />
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
      <Route path="/projectwesley">
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                        <Project/>
                    </motion.div>
      </Route>
     
      
      <Route path="/blog"  >
      <motion.div
                    
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                      <Blog/>
        </motion.div>
        </Route>
      <Route exact path="/post/:id" component={Post} />
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
