import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (

    <Router>

      <div className="App">

        <ScrollToTop />
      
        <Header />
        
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/detail/:id">
            <Detail/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
          
        </Switch>

        <Footer/>
    
      </div>

    </Router>

  );
}

export default App;
