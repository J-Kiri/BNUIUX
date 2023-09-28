import './Home.css'
import { Link } from 'react-router-dom';

import IMAGEPaint from "./assets/IMAGEM_Paint.png"
import VECTORArrow from "./assets/VECTOR_Arrow.png" 
import VECTORBar from "./assets/VECTOR_Bar.png"
import ICONLanguage from "./assets/ICON_Linguas.png"
import ICONBooks from "./assets/ICON_Livros.png"

export default function Home() {
    return(
        <body id="home">
            {/* Main Screen */}
            <h1 className="home_title">
                It's about design 
                <span className="p">.</span>
            </h1>

            <h3 className="text">
                I'm Breno Neves, a Brazilian Graphic Designer migrating
                to UI/UX Design focused on delivering the right message
                and the right experience to the right user.
            </h3>

            <li className="about">
                <Link to = '/about'>about me</Link>
            </li>

            <Link to = '/about'>
                <img class="arrow" src={VECTORArrow} alt="Arrow"/>
            </Link>      

            <img className="paint" src={IMAGEPaint} alt="Paint"/>

            <div className="s_background" />

            <img className="bar" src={VECTORBar} alt="Bar"/>
        
            {/* Competencies */}
            <h1 className="topic" id="topic1">
                COMPETENCIES
                <span className="p">.</span>
            </h1>

            <h4 className="text" id="ux">
                <span className="title_bg">UX Design</span>
            </h4>

            <div className="h_square" id="sq1">
                <h4 className="text" id="sq1_p1"><span className="title_bg">Analysis Tools</span></h4>
                <h4 className="text" id="sq1_p2"><span className="title_bg">UX Heuristics</span></h4>
                <h4 className="text" id="sq1_p3"><span className="title_bg">Userflow</span></h4>
                <h4 className="text" id="sq1_p4"><span className="title_bg">A/B Testing</span></h4>
                <h4 className="text" id="sq1_p5"><span className="title_bg">Personas Development</span></h4>
                <h4 className="text" id="sq1_p6"><span className="title_bg">Costumer Jouney Mapping</span></h4>
            </div>

            <h4 className="text" id="ui">
                <span className="title_bg">UI Design</span>
            </h4>

            <div className="h_square" id="sq2">
                <h4 className="text" id="sq2_p1"><span className="title_bg">Figma</span></h4>
                <h4 className="text" id="sq2_p2"><span className="title_bg">Advanced Typography</span></h4>
                <h4 className="text" id="sq2_p3"><span className="title_bg">Grids</span></h4>
                <h4 className="text" id="sq2_p4"><span className="title_bg">Wireframing</span></h4>
                <h4 className="text" id="sq2_p5"><span className="title_bg">Prototypes</span></h4>
                <h4 className="text" id="sq2_p6"><span className="title_bg">Design System</span></h4>
            </div>

            {/* Education */}
            <h1 className="topic" id="topic2">
                EDUCATION
                <span className="p">.</span>
            </h1>

            <img className="livros" src={ICONBooks} alt="Livros"/>
            <h4 className="text" id="edc">COURSES</h4>

            <h4 className="text" id="edc_1">UI Design</h4>
            <h4 className="text" id="edc_2">UI Design Advanced</h4>
            <h4 className="text" id="edc_3">UI Design Advanced Typography</h4>
            <h4 className="text" id="edc_4">UX Design</h4>
            <h4 className="text" id="edc_5">UX Heuristics</h4>
            <h4 className="text" id="edc_6">UX Research</h4>
            

            <img className="linguas" src={ICONLanguage} alt="Linguas"/>
            <h4 className="text" id="edl">LANGUAGES</h4>

            <h4 className="text" id="edl_1">Portuguese</h4>
            <h4 className="text" id="edl_2">English</h4>
            <h4 className="text" id="edl_3">Spanish</h4>

            <img className="bar" id="bar_2" src={VECTORBar} alt="Bar"/>
        </body>
    )
}
