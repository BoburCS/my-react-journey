import { useState, useEffect } from "react";
import axios from "axios";
import getDayName from "../../functions/getDayName";
import NamazTimeCard from "../../components/NamazTimeCard";
import "./namaz.css";

import Bomdod from "../../assets/icons/icon-bomdod.svg";
import Sunrise from "../../assets/icons/icon-quyosh-chiqishi.svg";
import Peshin from "../../assets/icons/icon-peshin.svg";
import Asr from "../../assets/icons/icon-asr.svg";
import Shom from "../../assets/icons/icon-shom.svg";
import Xufton from "../../assets/icons/icon-xufton.svg";

const api = {
    key: "bba7ab9bd035d049765305fef6073578",
    base: "https://muslimsalat.com"
}

function Namaz() {
    const [location, setLocation] = useState("Toshkent");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [namaz, setNamaz] = useState(null);
    const [date, setDate] = useState(null); 

    async function fetchData() {
        try {
            const res = await axios.get(`${api.base}/${location}.json?key=${api.key}`);
            setNamaz(res.data);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const time = new Date(namaz?.items[0].date_for);
        setDate(`${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} - ${getDayName(time.getDay())}`);
    }, [namaz]);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="namaz-main">
            <h1>{location} vaqti uchun namoz vaqti</h1>
            <p className="date">{date}</p>

            <div className="circle">
                <h5>Namoz vaqti</h5>
                <div className="time-container">
                    <div className="time">
                        <h1>{String(currentTime.getHours()).padStart(2, "0")}</h1>
                        <span>Soat</span>
                    </div>
                    <div className="border">

                    </div>
                    <div className="time">
                        <h1>{String(currentTime.getMinutes()).padStart(2, "0")}</h1>
                        <span>Daqiqa</span>
                    </div>
                </div>
            </div>

            <h4>8 Shabon, 1443</h4>
            
            {namaz ? (
                <div className="namaz-time-container">
                    <NamazTimeCard image={Bomdod} title="Bomdod" time={namaz.items[0].fajr} />
                    <NamazTimeCard image={Sunrise} title="Quyosh Chiqishi" time={namaz.items[0].shurooq} />
                    <NamazTimeCard image={Peshin} title="Peshin" time={namaz.items[0].dhuhr} />
                    <NamazTimeCard image={Asr} title="Asr" time={namaz.items[0].asr} />
                    <NamazTimeCard image={Shom} title="Shom" time={namaz.items[0].maghrib} />
                    <NamazTimeCard image={Xufton} title="Xufton" time={namaz.items[0].isha} />
                </div>
            ) : <p>No Data</p>}
        </section>
    );
}

export default Namaz;
