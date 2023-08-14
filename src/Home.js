import './Home.css'
import { Link } from 'react-router-dom';

import IMAGEPaint from "./assets/IMAGEM_Paint.png"
import VECTORArrow from "./assets/VECTOR_Arrow.png" 
import VECTORBar from "./assets/VECTOR_Bar.png" 

export default function Home() {
    return(
        <div>
            {/* Main Screen */}
            <h1 class="title">
                It's about design 
                <span class="p">.</span>
            </h1>

            <h3 class="text">
                I'm Breno Neves, a Brazilian Graphic Designer migrating
                to UI/UX Design focused on delivering the right message
                and the right experience to the right user.
            </h3>

            <li class="about">
                <Link to = '/about'>about me</Link>
            </li>

            <Link to = '/about'>
                <img class="arrow" src={VECTORArrow} alt="Arrow"/>
            </Link>      

            <img class="paint" src={IMAGEPaint} alt="Paint"/>

            <div class="s_background" />

            <img class="bar" src={VECTORBar} alt="Bar"/>
        
            {/* Competencias */}
            <h1 class="topic">
                COMPETENCIES
                <span class="p">.</span>
            </h1>

            <div class="square" id="sq1">
                <h4 class="text" id="sq1_p1"><span class="title_bg">Analysis Tools</span></h4>
                <h4 class="text" id="sq1_p2"><span class="title_bg">UX Heuristics</span></h4>
                <h4 class="text" id="sq1_p3"><span class="title_bg">Userflow</span></h4>
                {/* <h4 class="text" id="sq1_p4"><span class="title_bg">A/B Testing</span></h4>
                <h4 class="text" id="sq1_p5"><span class="title_bg">Personas Development</span></h4>
                <h4 class="text" id="sq1_p6"><span class="title_bg">Costumer Jouney Mapping</span></h4> */}
            </div>
        </div>
    )
}
