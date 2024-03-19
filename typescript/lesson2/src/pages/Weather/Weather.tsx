import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import WeatherData from "../../types/WeatherData";

const API = {
    key: "2889df3545b410591ec6628905e3bec6",
    base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
    const searchRef = useRef<HTMLInputElement>(null);
    const [location, setLocation] = useState<string>("Tashkent");
    const [data, setData] = useState<WeatherData | null>(null);

    async function fetchData() {
        try {
            const response = await axios.get(`${API.base}weather?q=${location}&units=metric&APPID=${API.key}`);
            setData(response.data);
        }   
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [location]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchRef.current) {
            setLocation(searchRef.current.value);
            searchRef.current.value = "";
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
               <input ref={searchRef} type="text" placeholder="Location..."/>
            </form>
            {data ? (
                <div>
                    <h3>City: {data.name}</h3>
                    <h4>Temprature: {data.main.temp}</h4>
                    <h4>Description: {data.weather[0].description}</h4>
                </div>
            ) : <p>No weather data fount!</p>}
        </>
    );
}

export default Weather;
