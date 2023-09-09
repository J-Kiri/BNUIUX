import './Footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
    return(
        <footer>
            <div className="footer_wrapper">
                <h1 className="footer_text" id="title">
                    <Link to="/">Breno Neves | UI/UX Designer</Link>
                </h1>

                <div className="spacer1" />

                <h1 className="footer_text" id="email">
                    <a href="mailto:brenopazi10@gmail.com">brenopazi10@gmail.com</a>
                </h1>

                <div className="spacer2" />

                <h1 className="footer_text" id="linkedin">
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                </h1>
            </div>
        </footer>
    )
}