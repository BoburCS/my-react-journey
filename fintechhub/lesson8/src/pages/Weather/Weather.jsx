import { useState, useEffect, useRef } from "react";
import getDayName from "../../functions/getDayName";

const base = "https://api.openweathermap.org/data/2.5/";

function Weather() {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState("Tashkent");
    const [error, setError] = useState("No data");
    const locationRef = useRef();
    const [date, setDate] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => locationRef.current.focus(), []);

    useEffect(() => {
        const fetchWeather = async () => {
            if (location) {
                try {
                    const response = await fetch(
                        `${base}weather?q=${location}&units=metric&APPID=${
                            import.meta.env.VITE_WEATHER_API_KEY
                        }`
                    );
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    setData(null);
                    switch (error.message) {
                        case "404":
                            setError("No weather found for that location");
                            break;
                        case "500":
                            setError("Server error, please try again later");
                            break;
                        default:
                            setError("An unexpected error occurred");
                    }
                }
            }
        };

        fetchWeather();
    }, [location]);

    useEffect(() => () => setLocation("Tashkent"), []);

    const handleClick = () => {
        setLocation(locationRef.current.value);
        locationRef.current.value = "";
    };

    useEffect(() => {
        const date = new Date();
        setDate(`${getDayName(date.getDay())}`);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date(), 1000));
        return () => clearInterval(interval);
    }, []);

    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const amPm = currentTime.getHours() >= 12 ? "PM" : "AM";
    const isDay = currentTime.getHours() >= 6 && currentTime.getHours() < 18;

    return (
        <div className="w-full min-h-screen flex">
            <div className="py-5 px-20 w-2/5 bg-white">
                <div className="mb-5 flex">
                    <input
                        ref={locationRef}
                        className="py-2 text-lg px-4 w-4/5 bg-slate-100 rounded-l-lg outline-none"
                        type="text"
                        placeholder="Enter the city or town..."
                    />
                    <button
                        onClick={handleClick}
                        className="text-white text-lg w-1/5 px-4 py-2 bg-blue-500 rounded-r-lg"
                    >
                        Search
                    </button>
                </div>

                {data ? (
                    <div className="flex flex-col items-center">
                        <img
                            src={
                                "https://cdn-icons-png.flaticon.com/512/3222/3222800.png"
                            }
                            alt={data.weather[0].description}
                            className="w-[200px] mb-3"
                        />
                        <h1 className="text-6xl mb-3">
                            {data.main.temp.toFixed(1)}&deg;C
                        </h1>
                        <h3 className="text-xl px-20 mb-5 py-3 border-b-2 capitalize">
                            {data.weather[0].description}
                        </h3>
                        <p className="text-xs">
                            {new Date(data.dt * 1000).toLocaleDateString(
                                "en-US",
                                {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </p>
                        <h3>
                            {date}, {`${hours}.${minutes} ${amPm}`}
                        </h3>
                        <h3 className="mb-10">{isDay ? `Day` : `Night`}</h3>
                        <h1 className="text-3xl">{data.name}</h1>
                    </div>
                ) : (
                    <h1>{error}</h1>
                )}
            </div>
            <div className="py-5 px-10 w-3/5 bg-slate-100">
                <h1 className="text-2xl mb-5">Today</h1>
                <div className="grid grid-cols-3 gap-8">
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-3 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Wind</h4>
                        <h3 className="text-2xl">{data?.wind?.deg} km/h</h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-3 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Humadity</h4>
                        <h3 className="text-2xl">{data?.main.humidity}%</h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-3 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Real Feel</h4>
                        <h3 className="text-2xl">
                            {data?.main.feels_like.toFixed(1)}&deg;C
                        </h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-3 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">UV index</h4>
                        <h3 className="text-2xl">3</h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-3 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Pressure</h4>
                        <h3 className="text-2xl">{data?.main.pressure} mb</h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-3 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Change of Rain</h4>
                        <h3 className="text-2xl">70%</h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-1 p-5 text-white bg-blue-500">
                        <h3 className="font-thin text-lg">
                            Temperature History
                        </h3>
                        <h3 className="text-2xl">
                            {data?.main.feels_like.toFixed(1)}&deg;C
                        </h3>
                        <h3 className="text-2xl">
                            {data?.main.feels_like.toFixed(1)}&deg;C
                        </h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-1 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Sun</h4>
                        <h3>Rise 06.05 AM</h3>
                        <h3>Set 19.04 PM</h3>
                    </div>
                    <div className="w-full h-[140px] rounded-2xl flex flex-col gap-1 p-5 text-white bg-blue-500">
                        <h4 className="font-thin text-lg">Moon</h4>
                        <h3>Rise 19.04 PM</h3>
                        <h3>Set 06.05 AM</h3>
                    </div>
                </div>
                <h2 className="mt-10 text-xl">
                    All data provided by{" "}
                    <span className="text-blue-500">Bobby</span>
                </h2>
            </div>
        </div>
    );
}

export default Weather;
