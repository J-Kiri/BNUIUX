import './Footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
    return(
        <nav>
            <div class="wrapper">
                <h1 class="footer_text" id="title">
                    Breno Neves | UI/UX Designer
                </h1>

                <h1 class="footer_text" id="email">
                    brenopazi10@gmail.com
                </h1>

                <h1 class="footer_text" id="linkedin">
                    LinkedIn
                </h1>
            </div>
        </nav>
    )
}