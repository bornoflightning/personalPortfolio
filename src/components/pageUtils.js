import React from 'react';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import List from './List';

 export const renderPage = ({state, projects}) => {
       
            
    switch(state) {

        case('Project'):        
            return  <div className='content'>
                        {projects.map(project => 
                        <Project 
                        name= {project.name}
                        link= {project.link}
                        source = {project.source}
                        />)}
                    </div>

        case('Resume'):            
            return <Resume />
        

        case('About'):            
            return <About /> 
        

        default:
            return <Resume />;
        
    }            
}