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
            
            {/* image of project here, and a link to page */}
            <a href= { props.link }><img src= { props.source } className="image" alt=""></img></a>
            {/* name of project here */}
            <div className= "project-name"> { props.name }</div>
        </div>

    );
}

export default Project;