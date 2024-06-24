import MonochromeLogo from '../assets/green-monochrome-logo.png';

export default function Footer() {
    return (
        <footer>
            <img src={MonochromeLogo} alt="monochrome logo" />
            <small className='text-2'>Little Lemon&copy; all rights reserved</small>
        </footer>
    )
}