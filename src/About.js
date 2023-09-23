import './About.css'

import IMAGEProfile from "./assets/IMAGEM_Profile.png"
import ICONLanguage from "./assets/ICON_Linguas.png"
import ICONBooks from "./assets/ICON_Livros.png"

export default function About() {
    return(
        <body id="about">
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
                    <span className="hif">_</span><br/><br/>

                    <span className="highlight">WHAT I BELIEVE</span><br/><br/>

                    I believe in freedom and opportunity. Freedom to create, research, experiment, and work
                    provides better results and results in amazing and innovative projects. Opportunities
                    provide dedicated, talented and intelligent people to come up with ideas and produce
                    consequently excellent results.<br/>
                    <span className="hif">_</span><br/><br/>
                </h3>

                {/* Competencies */}
                <h1 className="topic" id="topic1_about">
                    COMPETENCIES
                    <span className="p">.</span>
                </h1>

                <h4 className="text" id="ux_about">
                    <span className="title_bg">UX Design</span>
                </h4>

                <div className="square" id="sq1">
                    <h4 className="text" id="sq1_p1_about"><span className="title_bg">Analysis Tools</span></h4>
                    <h4 className="text" id="sq1_p2_about"><span className="title_bg">UX Heuristics</span></h4>
                    <h4 className="text" id="sq1_p3_about"><span className="title_bg">Userflow</span></h4>
                    <h4 className="text" id="sq1_p4_about"><span className="title_bg">A/B Testing</span></h4>
                    <h4 className="text" id="sq1_p5_about"><span className="title_bg">Personas Development</span></h4>
                    <h4 className="text" id="sq1_p6_about"><span className="title_bg">Costumer Jouney Mapping</span></h4>
                </div>

                <h4 className="text" id="ui_about">
                    <span className="title_bg">UI Design</span>
                </h4>

                <div className="square" id="sq2">
                    <h4 className="text" id="sq2_p1_about"><span className="title_bg">Figma</span></h4>
                    <h4 className="text" id="sq2_p2_about"><span className="title_bg">Advanced Typography</span></h4>
                    <h4 className="text" id="sq2_p3_about"><span className="title_bg">Grids</span></h4>
                    <h4 className="text" id="sq2_p4_about"><span className="title_bg">Wireframing</span></h4>
                    <h4 className="text" id="sq2_p5_about"><span className="title_bg">Prototypes</span></h4>
                    <h4 className="text" id="sq2_p6_about"><span className="title_bg">Design System</span></h4>
                </div>

                {/* Education */}
                <h1 className="topic" id="topic2_about">
                    EDUCATION
                    <span className="p">.</span>
                </h1>

                <img className="livros_about" src={ICONBooks} alt="Livros"/>
                <h4 className="text" id="edc_about">COURSES</h4>

                <h4 className="text" id="edc_1_about">UI Design</h4>
                <h4 className="text" id="edc_2_about">UI Design Advanced</h4>
                <h4 className="text" id="edc_3_about">UI Design Advanced Typography</h4>
                <h4 className="text" id="edc_4_about">UX Design</h4>
                <h4 className="text" id="edc_5_about">UX Heuristics</h4>
                <h4 className="text" id="edc_6_about">UX Research</h4>
                

                <img className="linguas_about" src={ICONLanguage} alt="Linguas"/>
                <h4 className="text" id="edl_about">LANGUAGES</h4>

                <h4 className="text" id="edl_1_about">Portuguese</h4>
                <h4 className="text" id="edl_2_about">English</h4>
                <h4 className="text" id="edl_3_about">Spanish</h4>
            </div>
        </body>
            
    )
}