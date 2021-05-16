import React from 'react'
import './index.css'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Locations from './pages/Locations'
import Delivery from './pages/Delivery'
import Menu from './pages/Menu'
import Reservations from './pages/Reservation'
import Category from './pages/Category'
import RestourantDetails from './pages/RestourantDetails'
import MenuItems from './pages/MenuItems'

function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route  path='/menu'>
         <Menu/>
       </Route>
       <Route path='/reservation'>
         <Reservations/>
       </Route>
       <Route path='/locations'>
         <Locations/>
       </Route>
       <Route path='/delivery'>
         <Delivery/>
       </Route>
       <Route path='/category/:id'>
         <Category/>
       </Route>
       <Route path='/restourant/:id'>
         <RestourantDetails/>
       </Route>
       <Route path='/items/:id'>
         <MenuItems/>
       </Route>
     </Switch>
    </Router>
   
  );
}

export default App;
