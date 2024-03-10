import { useState, useEffect, useRef } from "react";

const API = {
    key: "2889df3545b410591ec6628905e3bec6",
    base: "https://api.openweathermap.org/data/2.5/",
}

function Weather() {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState("Tashkent");
    const [error, setError] = useState("No data");
    const locationRef = useRef();

    useEffect(() => {
        if (location) {
            fetch(`${API.base}weather?q=${location}&units=metric&APPID=${API.key}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No weather found for that location");
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => {
                setData(null);
                setError(error.message);
            });
        }
    }, [location]);

    useEffect(() => () => setLocation("Tashkent"), []);

    const handleClick = () => {
        setLocation(locationRef.current.value);
        locationRef.current.value = "";
    }

    return (
        <div>
            <input ref={locationRef} type="text" placeholder="Enter the city or town..."/>
            <button onClick={handleClick}>Search</button>

            {data ? (
                <>
                    <h1>Location: {data.name}</h1>
                    <h1>Feels like: {data.main.feels_like}</h1>
                    <h1>Weather Description: {data.weather[0].description}</h1>
                    <h1>Temprature: {data.main.temp}</h1>
                    <h1>Wind Speed: {data.wind.speed}</h1>
                </>
            ) : (
                <h1>{error}</h1>
            )}            
        </div>
    );
}

export default Weather;
