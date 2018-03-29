import React from "react";
import All from "./pages/All";
import Home from "./pages/Home";
import Random from "./pages/Random";
import NoMatch from "./pages/NoMatch";
import Favorites from "./pages/Favorites";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


const App = () =>
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />
				<Route path="/all" exact component={All} />
				<Route path="/random" component={Random} />
				<Route path="/favorites" component={Favorites} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>


export default App;
