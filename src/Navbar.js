import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <nav>
            <div className="wrapper">
                <h1 className="bn">bn
                    <span className="uiux">uiux</span>
                </h1>

                <ul>
                    <li>
                        <Link to = '/'>home</Link>
                    </li>

                    <li>
                        <Link to = '/work'>work</Link>
                    </li>

                    <li>
                        <Link to = '/about'>about me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}