import '../index.css';
import Mark from '../assets/github-mark.png';
import Linked from '../assets/LinkedIn.png';

const Footer = () => {
    return (
        <footer className= "footerStuff">
            <div className="footerIcons">
                <div className='outsideSources'>
                <div className='githubInfoFooter'></div>
                <a href="https://github.com/bornoflightning"><img src= { Mark } alt="GitHub" width="10" height="10" className='markImageFooter'></img></a>
                <p><a href="https://github.com/bornoflightning"></a></p>
                </div>
                <div className='LinkedInInfoFooter'>
                <a href="https://github.com/bornoflightning"><img src= { Linked } alt="GitHub" width="10" height="10" className='linkedInFooter'></img></a>
                <p><a href="https://www.linkedin.com/in/archery-vic/"></a></p>
                </div>
            </div>            
        </footer>

    )
};

export default Footer;

{/* const Footer = () => {
    return (
        <footer>
            <div>
            
            
            <div className='LinkedInInfo'>
            <a href="https://github.com/bornoflightning"><img src= { Linked } alt="GitHub" width="10" height="10" className='linkedIn'></img></a>
            <p>LinkedIn Page: <a href="https://www.linkedin.com/in/archery-vic/"></a></p>
            </div>
        </footer>

    )
};

export default Footer; */}