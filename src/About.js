import './About.css'

import IMAGEProfile from "./assets/IMAGEM_Profile.png"

export default function About() {
    return(
        <body>
            <h1 className="about_title"> ABOUT ME <span className="p">.</span></h1>

            <div className="background">
                <img className="profile" src={IMAGEProfile} alt="ProfilePicture"></img>
            </div>
        </body>
            
    )
}