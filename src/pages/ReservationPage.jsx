import { Link, useNavigate } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';

export default function ReservationPage() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        let navigationURL = "/details?"

        navigationURL += `date=${e.target.date.value}`
        navigationURL += `&time=${e.target.time.value}`
        navigationURL += `&amount=${e.target.amount.value}`
        navigationURL += `&seating=${e.target.seating.value}`
        
        if (e.target.special.value) navigationURL += `&special=${e.target.special.value}`

        navigate(navigationURL)
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