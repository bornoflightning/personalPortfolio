import React from 'react';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import List from './List';
import { renderPage } from './pageUtils';


const Handler = ({page, renderPage}) => {
 
        const [project, setProject] = React.useState([
            ...List
        ])

        const pageContent = renderPage(page);
       
    
        return <div>{ pageContent }</div>
}


export default Handler;