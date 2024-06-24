import { Link } from 'react-router-dom';

export default function ReservationPage() {
    return (
        <main className="reservation-page primary-1-background text-2">
            <h1 className="primary-2 subtitle-text">Reserve a table</h1>
            <div className="reservation-container neutral-white-background">
                <label htmlFor='date'>Date:</label>
                <input type="date" name="date" id="date" min={new Date().toISOString().split('T')[0]} />
                <label htmlFor='time'>Time:</label>
                <select name="time" id="time">Choose your time:
                    {}
                </select>
                <label htmlFor='amount'>Amount of guests:</label>
                <label htmlFor='seating'>Seating option:</label>
            </div>
            <button>Next</button>
            <Link to="/">
                <button>Home</button>
            </Link>
        </main>
    )
}