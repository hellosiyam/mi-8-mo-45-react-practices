import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>This is Nav Bar</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contract'>Contract</NavLink>
        </div>
    );
};

export default Header;