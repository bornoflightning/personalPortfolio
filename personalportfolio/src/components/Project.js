// import React from 'react';
// import '../index.css';
// import Project from './Project';
// import List from './List';


const Project = (props) => {
    // const [project, setProject] = React.useState([
    //     ...List
    //   ])

    return (
        <div className= "project-card">
            <div className= "project-name"> { props.name }</div>
            
            {/* image of project here, and a link to page */}
            <a href= { props.link }><img src= { props.source } className="image" alt=""></img></a>
            {/* name of project here */}
            <a href= {props.git} className="gitLink"><p>github repo link</p></a>
            
            
            
        </div>

    );
}

export default Project;