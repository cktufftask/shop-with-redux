import React from "react";
import "./App.css";
import Button from "./components/shop/Button";
import Main from "./components/shop/Main";
import Address from "./components/shop/Address";
import Quote from "./components/shop/Quote";
import OrderPlace from "./components/shop/OrderPlace";
 import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <div className=" container App">
      <Button /> 
       <Switch>
        <Route exact path="/" component={Main}/>
        <Route  path="/address"  component={Address}/>
        <Route  path="/quote"  component={Quote}/>
        <Route  path="/orderplaced"  component={OrderPlace}/>
      </Switch> 
    </div>
    
     </>
  );
}

export default App;
