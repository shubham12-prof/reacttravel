import React from 'react';
import { BrowserRouter , Route, Switch , Redirect } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from "./components/Footer"
import Contact from "./components/pages/Contact"
import Services from './components/pages/Services';
import ScrollToTop from './components/ScrollToTop';
import Tours from './components/pages/Tours'
import About from './components/pages/About'
const App = () => {
  return (
    <>
      <BrowserRouter> 
        <ScrollToTop />
        <Navbar /> 
         <Switch>
         <Route exact path ="/reacttravel" component ={Home}  />
          <Route exact path ="/" component ={Home}  />
          <Route exact path ="/About" component ={About} />
          <Route exact path ="/Tours" component ={Tours} />
          <Route exact path ="/Services" component ={Services} />
          <Route exact path ="/Contact" component ={Contact} />
          <Redirect to ='/' />
      </Switch> 
<Footer />
</BrowserRouter> 
</>
  )
}
export default App;