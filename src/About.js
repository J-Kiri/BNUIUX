import './About.css'

import IMAGEProfile from "./assets/IMAGEM_Profile.png"

export default function About() {
    return(
        <body>
            <h1 className="about_title"> ABOUT ME <span className="p">.</span></h1>

            <div className="background">

            <img className="profile" src={IMAGEProfile} alt="ProfilePicture"></img>

                <h3 className="text_about" id="text1">
                    Hi!<br/>
                    I’m Breno Neves, a brazilian graphic design migrating to UI/UX!<br/>
                    Curious, researcher and competent.<br/>

                    <span className="hif">_</span><br/><br/>

                    <span className="highlight">WHAT I DO?</span><br/><br/>

                    Design is communication. My focus is to communicate the right message to the right listener. I work as a Designer on Visual Identity, Packaging and currently
                    UI/UX Design projects, including User Flow, User Research, Wireframing and Interface Design.<br/>
                    
                    <span className="hif">_</span><br/>
                </h3>

                <h3 className="text_about" id="text2">
                    <span className="highlight">WHAT I DID</span><br/><br/>

                    With 6 years of experience within the world of Design, I have had the opportunity to work
                    and learn many things during all this time. I worked producing illustrations and prints
                    for the textile industry, Social Media, commercial presentations for big campaigns and
                    advertisements and specializing in Brand Design and UI/UX Design.<br/>
                    _<br/><br/>

                    <span className="highlight">WHAT I BELIEVE</span><br/><br/>

                    I believe in freedom and opportunity. Freedom to create, research, experiment, and work
                    provides better results and results in amazing and innovative projects. Opportunities
                    provide dedicated, talented and intelligent people to come up with ideas and produce
                    consequently excellent results.<br/>
                    _<br/><br/>
                </h3>
            </div>
        </body>
            
    )
}