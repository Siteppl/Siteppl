import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "G-SLJCC9GTPS"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ParallaxProvider>
    <App />
    </ParallaxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
