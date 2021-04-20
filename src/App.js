import './App.css';
import Header from './Component/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {createContext, useState } from 'react';
import Privateroute from './Component/Privateroute/Privateroute';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order'
import Login from './Component/Login/Login';
import Manageproduct from './Component/Order/Manageproduct/Manageproduct';
import Addproduct from './Component/Addproduct/Addproduct';
import Productdetails from './Component/Productdetails/Productdetails';
import Review from './Component/Home/Review/Review';
import Admin from './Component/Admin/Admin';
import Showproduct from './Component/Showproductforadmin/Showproduct';
export const usercontext=createContext();
function App() {
 
  const [loggeduser,setloggeduser]=useState({
    displayName:'',
    email:'',
    password:''
  })
  return (
    <usercontext.Provider  value={[loggeduser,setloggeduser]} >
      <Router>
       <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Privateroute path="/manageproduct">
            <Manageproduct></Manageproduct>
       </Privateroute>

        <Privateroute path="/order">
             <Order></Order>
        </Privateroute>

      <Privateroute path="/show/:id">
         <Productdetails></Productdetails>
      </Privateroute>        

      <Privateroute path="/addproduct">
        <Addproduct></Addproduct>
      </Privateroute>
        
        <Route path="/login">
          <Login></Login>
        </Route> 

        <Route path="/makeadmin">
           <Admin></Admin>
        </Route> 

        <Privateroute path="/review">
              <Review></Review>
        </Privateroute>
        <Route path="/showproduct">
           <Showproduct></Showproduct>
        </Route>

        <Route exact path="/">
           <Home></Home>
        </Route>

      </Switch>
      </Router>
      </usercontext.Provider>
  );
}

export default App;
