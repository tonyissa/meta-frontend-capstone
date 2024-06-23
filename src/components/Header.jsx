import Navbar from "./Navbar";
import Logo from '../assets/Logo.svg';
import HamburgerMenu from '../assets/🦆 icon _hamburger menu.svg';

export default function Header() {
    return (
        <header>
            <Navbar />
            <div className="logo-container">
                <img src={HamburgerMenu} alt="menu" style={{display: 'none'}} />
                <img src={Logo} alt="logo" />
            </div>
        </header>
    )
}