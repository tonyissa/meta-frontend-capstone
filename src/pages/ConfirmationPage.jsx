import { useEffect } from "react"
import ConfirmationDetails from "../components/ConfirmationDetails";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {

    useEffect(() => {  
        document.title = 'Reservation confirmed!';
    }, [])

    return (
        <main className="page primary-1-background text-2">
            <h1 className="primary-2 subtitle-text">Reservation confirmed!</h1>
            <ConfirmationDetails />
            <Link to="/">
                <button>Home</button>
            </Link>
        </main>
    )
}