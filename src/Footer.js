import './Footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
    return(
        <footer>
            <h1 className="footer_text" id="title">
                Breno Neves | UI/UX Designer
            </h1>

            <h1 className="footer_text" id="email">
                brenopazi10@gmail.com
            </h1>

            <h1 className="footer_text" id="linkedin">
                LinkedIn
            </h1>
        </footer>
    )
}