import Mark from '../assets/github-mark.png';
import Linked from '../assets/LinkedIn.png';


const Resume = () => {
    return (    
  

  
<div className="resume">
    
    <h2 className="jobTitle">Websites, Portfolios, Profiles</h2>
    <div className="centeredStuff">
        <div className='outsideSources '>
            <div className='githubInfo'>
                <a href="https://github.com/bornoflightning"><img src= { Mark } alt="GitHub" width="10" height="10" className='markImage'></img></a>
                <p>Github Page: <a href="https://github.com/bornoflightning"></a></p>
            </div>
            <div className='LinkedInInfo'>
                <a href="https://github.com/bornoflightning"><img src= { Linked } alt="GitHub" width="10" height="10" className='linkedIn'></img></a>
                <p>LinkedIn Page: <a href="https://www.linkedin.com/in/archery-vic/"></a></p>
            </div>

        </div>
    </div>
    
    <h2>Professional Summary</h2>
    <p className="block">Experienced Financial Services Consultant and proven leader at building vibrant businesses
    by developing new prospects and accounts and managing customer relationships to achieve
    sales goals. Dedicated to generating customer goodwill and loyalty by developing key
    relationships with decision-makers. Demonstrated leverage network of customer contacts to
    increase understanding of customer needs and employ business-growth strategies.</p>
    <h2>Skills</h2>
    <div className="Skills">
       
        <div className="Tech">
            <h3>Tech</h3>
            <ul className="ulClass">            
            <li>Data Storage and Retrieval</li>            
            <li>HTML and XML</li>
            <li>RDMS Development and SQL</li>                 
            <li>Scrum Methodology</li>            
            <li>Data Analysis</li>
            <li>Front-End Development</li>            
            <li>Object-Oriented Programming (OOP)</li>            
            <li>API Development</li>            
            <li>Software Applications</li>
            <li>Programming Languages:
                <ul className="programmingLanguages">
                <li>JavaScript <span>★★★★☆</span></li>
                <li>Python <span>★★★☆☆</span></li>
                <li>Java <span>★★☆☆☆</span></li>
                <li>C++ <span>★★☆☆☆</span></li>              
                </ul>
            </li>
            
            </ul>
        </div>
        <div className="Finance">
            <h3>Finance</h3>
            <ul className="ulClass">
            <li>Investment Strategy</li>
            <li>Financial Consulting</li>
            <li>Service Sales</li>
            <li>Persuasive Negotiations</li>
            <li>Insurance Policy Sales</li>
            <li>Quote Information</li>
            <li>Life Insurance</li>
            <li>Licensing Requirements</li>
            <li>Call Center Customer Service</li>
            </ul>
        </div>

        <div className="Languages">
            <h3>Spoken Languages</h3>
            <ul className="ulClass">
            
            <li>Spanish <span>★★★★★</span></li>
            <li>French <span>★★★★☆</span></li>
            <li>Russian <span>★★★☆☆</span></li>
            <li>Japanese <span>★★☆☆☆</span></li>
            
    

            </ul>

        </div>


    </div>
   
    <h2>Work History: </h2>
    <h2 className="jobTitle">Software Engineer Student</h2>
    <h3 className="Strong">08/2022 to Current</h3>
    <h3>University Of Denver, Denver</h3>
    
    <div className="block">
        <ul>
        <li>Worked with software development and testing team members to design and develop
        robust solutions to meet client requirements for functionality, scalability and performance.</li>
        <li>Reviewed project specifications and designed technology solutions that met or exceeded
        performance expectations.</li>
        <li>Coordinated with other engineers to evaluate and improve software and hardware
        interfaces.</li>
        <li>Worked with clients to develop financial planning strategies and solutions through
        evaluation of finances.</li>
        <li>Developed and maintained strong knowledge of multiple products and varying levels of
        benefits within each product.</li>
        </ul>
        </div>
    <h3 className="jobTitle">INVESTMENT SOLUTIONS REPRESENTATIVE</h3>
  <h3>11/2019 to Current</h3>
  <h3>Fidelity Investmets, Denver Colorado</h3>
  <div className="block">
    <ul>
        <li>Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.</li>
        <li>Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.</li>
        <li>Coordinated with other engineers to evaluate and improve software and hardware interfaces.</li>
        <li>Worked with clients to develop financial planning strategies and solutions through evaluation of finances.</li>
        <li>Developed and maintained strong knowledge of multiple products and varying levels of benefits within each product.</li>
    </ul>
  </div>
  {/* <h3 className="jobTitle">RELATIONSHIP MANAGER</h3>
  <p>02/2019 to 11/2019</p>
  <p>Bank Of America, North Port, FL</p> */}
  <h3 className="jobTitle">BANK MANAGER</h3>
  <h3>11/2017 to 02/2019</h3>
  <h3>Key Bank, Denver, CO</h3>
  <div className="block">
    <ul>
        <li>Boosted financial service sales by using cross-selling techniques.</li>
        <li>Supported regional center in climbing from 47% in performance to 154% within 1 year by coaching, educating and joining client meetings with representatives.</li>
        <li>Identified areas of opportunity for Financial Advisors under my coaching, and created and implemented strategy to help Team of of over 50 proficiently understand, uncover and present solutions to clients.</li>
        <li>Developed and cultivated lucrative relationships with both new and existing clients through effective communication and exemplary interpersonal skills.</li>
        <li>Generated new business and referral clients in partnership with financial advisors and branch team.</li>
        <li>Communicated regularly with clients to understand needs, evaluate current product use and cross-sell new products.</li>
        <li>Achieved goals for sale of bank products and services and exceeded performance metrics for customer service.</li>
        <li>Planned portfolio solutions after carefully analyzing clients' financial health and future requirements.</li>
        <li>Assessed employee performance and developed improvement plans.</li>
        <li>Interviewed and hired talented individuals with top-level strengths, improving organizational talent and skill set.</li>
        <li>Maintained confidentiality of bank records and client information to prevent mishandling of data and potential breaches.</li>
        <li>Identified and capitalized on community business opportunities with effective networking.</li>
    </ul>
  </div>

 
  <h2>EDUCATION</h2>
  <ul>
    <li>Red Rocks Community College, Denver, CO<br/>Associate of Applied Science, Engineering, Expected in 08/2023<br/>Currently working to transfer my credit to School of Mines to further my education in Science and Technology.</li>
    <li>University of Denver, Denver, CO<br/>No Degree, Full Stack Engineering Bootcamp, Expected in 02/2023</li>
</ul> 
  <h2>CERTIFICATIONS</h2>
  <ul>
    <li>SIE</li>
    <li>Series 7</li>
    <li>Series 63</li>
    <li>Series 65</li>
    <li>Life Insurance</li>
    <li>Health Insurance</li>
</ul>
    <h2>PROGRAMMING LANGUAGES </h2>
    <ul>
    <li>JavaScript <span>★★★★☆</span></li>
    <li>Python <span>★★★☆☆</span></li>
    <li>Java <span>★★☆☆☆</span></li>
    <li>C++ <span>★★☆☆☆</span></li>
    </ul>
  
</div>





    
)};

export default Resume;
