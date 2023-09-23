import './Work.css'
import { Project } from './Projects.js';
import { Link } from 'react-router-dom';

export default function Work() {
    return(
        <body id="work">
            <h1 className="about_title">WORK<span className="p">.</span></h1>

            <h3 className="work_text">
                All projects shown below are the result of a lot of research,
                testing, creativity and ambition and were realized in
                December/2022 to the present day.
            </h3>

            <div className="w_background">
                
            </div>

            <Project />
        </body>
    )
}