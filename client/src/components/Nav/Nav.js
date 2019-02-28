import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class NavTabs extends React.Component {
  render() {
    return (
      <div className="navbar">
        <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
            <Link to="/" className="link dim black dib mr3" title="Home">
              Home
            </Link>
            <Link to="/games" className="link dim black dib mr3" title="Games">
              Games
            </Link>
            <Link to="/books" className="link dim black dib mr3" title="Games">
              Books
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavTabs;
