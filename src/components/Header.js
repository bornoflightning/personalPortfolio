import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({setPage}) => {
    
    const handleClick = (page) => {
        setPage(page);
    };

    return (
        <header className="headerStuff">
            <div>
            <h1 className="topName">Victor Escarcega</h1>
            </div>
            <div className='links'>
                <NavLink href='#About'  exact to="/" activeClassName="active" onClick= { ()=> handleClick('About')}><p> About me</p></NavLink>                
                <NavLink href='#Portfolio' exact to="/project" onClick= { ()=> handleClick('Project')}><p>Portfolio</p></NavLink>
                <NavLink href='#Resume' exact to="/contact" onClick= { ()=> handleClick('Contact')}><p>Contact</p></NavLink>
                <NavLink href='#Resume' exact to="/resume" onClick= { ()=> handleClick('Resume')}><p>Resume</p></NavLink>
                
                

            </div>
        </header>

    )
}


export default Header;