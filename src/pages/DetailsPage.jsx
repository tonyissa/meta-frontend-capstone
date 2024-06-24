import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import DetailsForm from "../components/DetailsForm";
import { submitAPI } from "../api";

export default function DetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {}

        formData[e.target.name.name] = e.target.name.value;
        formData[e.target.phone.name] = e.target.phone.value;
        formData[e.target.email.name] = e.target.email.value;

        for (const entry of location.search.slice(1).split('&')) {
            const [key, value] = entry.split('=');
            formData[key] = value;
        }

        setTimeout(() =>{}, 500)

        if (submitAPI(formData)) {
            navigate("/confirmation");
        } else {
            alert('Submission failed! please retry!')
            navigate("/reservations");
        }
    }

    if (!location.search) return (<Navigate to='/' />)

    return (
        <main className="reservation-page primary-1-background text-2">
            <h1 className="primary-2 subtitle-text">Confirm your details</h1>
            <form className='form' onSubmit={handleSubmit}>
                <DetailsForm />
                <button type='submit'>Confirm</button>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </form>
        </main>
    )
}