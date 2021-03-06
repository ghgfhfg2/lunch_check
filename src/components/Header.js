import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import Mypage from "./Mypage";
import Content from "./Content";

function Header() {
  return (
    <>
      <Router>
        <div className="header-box">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/mypage">Mypage</Link>
            </li>
          </ul>
        </div>
        <div className="content-box">
          <Route exact path="/" render={() => <Content />} />
          <Route path="/join" component={Join} />
          <Route path="/login" component={Login} />
          <Route path="/mypage" component={Mypage} />
        </div>
      </Router>
    </>
  );
}

export default Header;
