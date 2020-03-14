import React from 'react';
import Main from './pages/Main';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Restaurants from "./pages/Restaurants";

import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/Restaurants" component={Restaurants}/>
                <Route exact path="/AboutUs" component={AboutUs}/>
                <Route exact path="/Contact" component={Contact}/>
                {/*<Route exact path="/product/" component={Product}/>*/}
                {/*<Route exact path="/product/:productId" component={Product}/>*/}
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
