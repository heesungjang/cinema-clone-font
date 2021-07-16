import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../Pages/MainPage";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
