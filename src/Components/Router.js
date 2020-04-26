import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Details from "Routes/Details";
import Header from "Components/Header";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            {/* <Route path="/tv/popular" render={()=><h1>Popular</h1>} /> */}
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Details} />
            <Route path="/show/:id" component={Details} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)