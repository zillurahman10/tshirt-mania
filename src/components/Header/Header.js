import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "orange" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <h2>logo</h2>
            <nav className='flex'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/OrderReview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grand pa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;