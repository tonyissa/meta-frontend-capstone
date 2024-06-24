import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="section-title">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/reservations'>Reservations</Link>
        </nav>
    )
}