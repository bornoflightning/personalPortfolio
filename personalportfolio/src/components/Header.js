import React from 'react';

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
                <a href='#About' onClick= { ()=> handleClick('About')}><p> About me</p></a>
                <a href='#Resume' onClick= { ()=> handleClick('Resume')}><p>Resume</p></a>
                <a href='#Portfolio' onClick= { ()=> handleClick('Project')}><p>Portfolio</p></a>
                
                

            </div>
        </header>

    )
}


export default Header;