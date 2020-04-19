import React from "react";
import Navbar from "./common/Navbar";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import CoursesManagement from "./courses/CoursesManagement";
import PageNotFound from "./common/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/courses" component={CoursesPage}></Route>
          <Route path="/course/:id" component={CoursesManagement}></Route>
          <Route path="/course" component={CoursesManagement}></Route>
          <Route path="/404" component={PageNotFound}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
