import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeClassName="active" exact >Home</NavLink>
            <NavLink to="/timer">Timer</NavLink>
            <NavLink to="/todo">Todo Apps</NavLink>
            <NavLink to="/blog">Blog Apps</NavLink>
            <NavLink to="/secret">Secret</NavLink>
        </div>
    );
}

export default Nav;