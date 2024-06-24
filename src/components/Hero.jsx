import { Link } from "react-router-dom";
import Food from '../assets/restauranfood.jpg';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text-container text-1 neutral-white">
                <h1 className="title-text">Little Lemon</h1>
                <h2 className="subtitle-text">Chicago</h2>
                <p className="lead-text">We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. 
                We focus on traditional recipes served with a modern twist.</p>
                <Link to="/reservations">
                    <button className="primary-2-background">Reserve a table</button>
                </Link>
            </div>
            <img src={Food} alt="Food" />
        </div>
    )
}