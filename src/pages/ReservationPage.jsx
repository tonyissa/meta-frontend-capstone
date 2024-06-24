import { Link, useNavigate } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';

export default function ReservationPage() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {}, 250);
        navigate('/confirmation')
    }

    return (
        <main className="reservation-page primary-1-background text-2">
            <h1 className="primary-2 subtitle-text">Reserve a table</h1>
            <form className='form' onSubmit={handleSubmit}>
                <ReservationForm />
                <button type='submit'>Next</button>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </form>
        </main>
    )
}