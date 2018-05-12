import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () =>(
    <header>
    <ul className="nav nav-tabs">
    
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active" to="/" exact={true}>Data</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active" to="/analysis">Analysis</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active" to="/monitor">Monitor</NavLink>
        </li>
    </ul>

    </header>
)

export default Header;