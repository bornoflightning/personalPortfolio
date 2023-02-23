import Selfie from "../assets/selfie.png"

const About = () => {
    return (
        <div className="aboutMe">
                <div className="picHolder">
                    <img src={Selfie} className="selfie"></img>
                </div>
                <div className="info">
                    <h1 className="title">About me</h1>
                    <p className="aboutText">   I am a man with many passions. I have spent years polishing my skills in the financial
                    industry, polishing my leadership and communication skills. I believe strong communiation is my
                    biggest strength, one skill to rule thema all. It can be translated into leadership, projects, sales, data science,
                    software engineering, you name it. At the same time, my heart is divided into the field of science and technology. The future is here,
                    all those novels of the past were written about the era you and I live in. Movies were made about the technology
                    you and I take for granted daily. So I simply could not sit by idly and watch the future unfold before my eyes 
                    without making a contribution to the manuscripts of mankind's history. Therefore, I am currently expanding my robust skills
                    into the sciences and tech. I am studying engineering and Science to futher advance my skillset. I am not sure what
                    the future holds for me, but a man with passion has no limits. A marathon runner will go further if he loves to run, rather 
                    than loving the finish line. I heard that somewhere, forgot where, thought it sounded cool so I included it here. I hope this
                    portfolio gives you a tiny piece of me, my quirkiness, sense of humor and the things I am interested in, also a few projects I have created. Feel free to offer me a job or money
                    either one, both works too. I have recently received a certificate as a full stack software engineer and continue to expand my education by pursuing a
                    degree in Engineering and Science</p>
                </div>
        </div>

    )
}

export default About;