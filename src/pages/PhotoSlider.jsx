import { useState, useEffect } from "react";
import howrah from "../assets/howrah.jpeg";
import standing from "../assets/standing.jpeg";
import closeup from "../assets/closeup.jpeg";
import "./PhotoSlider.css";

function PhotoSlider() {
    const photos = [closeup, howrah, standing];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="photo-slider-container">
            <div className="profile-slider" id="image-container">
                {photos.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Profile"
                        className={`profile-photo ${index === currentIndex ? "active" : "inactive"
                            }`}
                    />
                ))}
            <div className="slider-dots">
                {photos.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
            </div>
            </div>

        </div>
    );
}

export default PhotoSlider;
