import { useState, useEffect } from "react";
import axios from "axios";

const api = {
    key: "bba7ab9bd035d049765305fef6073578",
    base: "https://muslimsalat.com"
}

function Namaz() {

    const [location, setLocation] = useState("Tashkent");
    const [time, setTime] = useState(null);

    async function fetchData() {
        try {
            const res = await axios.get(`${api.base}/${location}.json?key=${api.key}`);
            setTime(res.data);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {time ? (
                <div>
                    <p>{time.items[0].asr}</p>
                    <p>{time.items[0].dhuhr}</p>
                    <p>{time.items[0].fajr}</p>
                    <p>{time.items[0].isha}</p>
                    <p>{time.items[0].maghrib}</p>
                    <p>{time.items[0].shurooq}</p>
                </div>
            ) : <p>No Data</p>}
        </div>
    );
}

export default Namaz;
