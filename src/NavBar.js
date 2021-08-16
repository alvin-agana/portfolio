import React from 'react';
import './NavBar.css';
import Logo from './Logo';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
        <div class="NavBar">
            <Link to={process.env.PUBLIC_URL + "/"}><Logo /></Link>
            <div class="NavBar-options">
                <Link to={process.env.PUBLIC_URL + "/"} style={{ color: 'inherit', textDecoration: 'none' }}><span>home</span></Link>
                <Link to={process.env.PUBLIC_URL + "/work"} style={{ color: 'inherit', textDecoration: 'none' }}><span>work</span></Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;
