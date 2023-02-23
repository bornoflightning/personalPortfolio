
import React from 'react';
import '../index.css';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import Footer from './Footer';
import Handler from './Handler';
import List from './List';
import Contact from './Contact';
import { BrowserRouter, NavLink } from 'react-router-dom';

const App = () => {

  const [page, setPage] = React.useState('About');

  const [project, setProject] = React.useState([
    ...List
])     

  const renderPage = (page) => {
            
            
    switch(page) {

        case('Project'):        
            return  <div className='content'>
                        {project.map(project => 
                        <Project 
                        git = {project.git}
                        name= {project.name}
                        link= {project.link}
                        source = {project.source}
                        />)}
                    </div>

        case('Resume'):            
            return <Resume />
        

        case('About'):            
            return <About /> 

        case('Contact'):            
            return <Contact />
        

        default:
            return <Resume />;
        
    }            
}

  return (
    <BrowserRouter>
      <div className="app">
      <Header
        setPage = {setPage}
        NavLink={ NavLink}
      />
      <Handler
        page= {page} renderPage= { renderPage }
      />    
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
