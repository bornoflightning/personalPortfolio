import Mark from '../assets/github-mark.png';
import Linked from '../assets/LinkedIn.png';
import Stack from '../assets/Stack.jpg';

const Contact = () => {

    return (

    <div> 
        <h2 className="jobTitle">Here are some ways to contact me:</h2>
        <div className="centeredStuff">
            <div div className="block">
            <div className='outsideSources icons'>
                <div className='githubInfo'>
                    <a href="https://github.com/bornoflightning"><img src= { Mark } alt="GitHub" width="10" height="10" className='markImage'></img></a>
                    <p>Github Page: <a href="https://github.com/bornoflightning"></a></p>
                </div>
                <div className='LinkedInInfo'>
                    <a href="https://github.com/bornoflightning"><img src= { Linked } alt="GitHub" width="10" height="10" className='linkedIn'></img></a>
                    <p>LinkedIn Page: <a href="https://www.linkedin.com/in/archery-vic/"></a></p>
                </div>
                <div className='LinkedInInfo'>
                    <a href="https://stackoverflow.com/users/9051461/bornoflightning"><img src= { Stack } alt="GitHub" width="10" height="10" className='linkedIn'></img></a>
                    <p>Stack Page: <a href="https://www.linkedin.com/in/archery-vic/"></a></p>
                </div>



                
                </div>
                

            </div>
            <div div className="block blueLetters">
                <p>email address:</p>
                <p>victor.escarcega@hotmail.com</p>
                </div>             
        </div>
        
    </div>  

    )
}

export default Contact;