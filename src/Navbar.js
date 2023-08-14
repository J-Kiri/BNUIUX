import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <nav>
            <div class="wrapper">
                <h1 class="bn">bn
                    <span class="uiux">uiux</span>
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