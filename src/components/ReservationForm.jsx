import { fetchAPI } from '../api';
import { useRef, useState } from 'react';

export default function ReservationForm() {
    const currentDate = useRef(new Date().toISOString().split('T')[0]);

    const [date, setDate] = useState(currentDate.current);
    const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

    function handleDateChange(e) {
        setDate(e.target.value);
        setAvailableTimes(fetchAPI(new Date(e.target.value)));
    }

    return (
        <div className="reservation-container neutral-white-background">
                <label htmlFor='date'>Date:</label>
                <input type="date" name="date" id="date" min={currentDate.current} value={date} onChange={handleDateChange} />
                <label htmlFor='time'>Time:</label>
                <select name="time" id="time">Choose your time:
                    {availableTimes.map(time => {
                        return (
                            <option key={time} value={time}>{time}</option>
                        )
                    })}
                </select>
                <label htmlFor='amount'>Amount of guests:</label>
                <input type="number" name="amount" id="amount" min={1} max={10} defaultValue={1} />
                <label htmlFor='seating'>Seating option:</label>
                <select name="seating" id="seating">Choose your seating location:
                    <option value="indoors">Indoors</option>
                    <option value="outdoors">Outdoors</option>
                </select>
                <div className='special-container'>
                    <label htmlFor='special'>Special requests:</label>
                    <textarea id='special' name='special' cols={25} rows={5} maxLength={250} />
                </div>
            </div>
    )
}