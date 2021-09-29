import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Sdata from './pages/Sdata';
import Services from './pages/Services';
import ScrollToTop from './ScrollToTop';
export const App = () => {
  return (
<React.StrictMode>
 <BrowserRouter> 
 <ScrollToTop />
     <Navbar />
       <Switch>
          <Route exact path ="/" component ={Home}  />
          <Route exact path ="/About" component ={About} />
          <Route exact path ="/Tours" component ={Sdata} />
          <Route exact path ="/Services" component ={Services} />
          <Route exact path ="/Contact" component ={Contact} />
      </Switch> 
  </BrowserRouter> 
<Footer />
</React.StrictMode>
  )
}
export default App;