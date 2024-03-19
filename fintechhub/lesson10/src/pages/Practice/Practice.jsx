import { useState, useEffect } from "react";
import Hotels from "../../data/hotels";
import Flex from "../../utils/Flex";

function Practice() {
    const [reserve, setReserve] = useState(null);
    const [data, setData] = useState([]);
    const [startPrice, setStartPrice] = useState("");
    const [endPrice, setEndPrice] = useState("");

    useEffect(() => setData(Hotels), []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));

        if (data.startDate > data.endDate) {
            alert("start date cannot be later than end date");
            return;
        }

        const startDate = new Date(data.startDate);
        const endDate = new Date(data.endDate);

        const totalDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
        const totalPrice = totalDays * data.price;

        data.totalDays = totalDays;
        data.totalPrice = totalPrice;
        setReserve(data);
        event.target.reset();
    }

    const handleStartPrice = (event) => {
        setStartPrice(event.target.value);
        filterHotels(event.target.value, endPrice);
    }

    const handleEndPrice = (event) => {
        setEndPrice(event.target.value);
        filterHotels(startPrice, event.target.value);
    }

    const filterHotels = (start, end) => {
        let sorted = Hotels;
        if (start !== "") {
            sorted = sorted.filter(hotel => hotel.price >= +start);
        }
        if (end !== "") {
            sorted = sorted.filter(hotel => hotel.price <= +end);
        }
        setData(sorted);
    }

    const handleSearch = (event) => {
        let filtered = Hotels;
        const searchValue = (event.target.value).trim().toLowerCase().replaceAll(" ", "");
        if (!searchValue) return setData(Hotels);
        setData(filtered.filter(hotel => hotel.name.trim().toLowerCase().replaceAll(" ", "").includes(searchValue)));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Flex m={"30px"} p={"30px"} direction={"column"} gap={"30px"}>
                    <input name="title" type="text" placeholder="Which hotel"/>
                    <div>
                        <label htmlFor="start">start date</label>
                        <input name="startDate" type="date"/>
                    </div>
                    <div>
                        <label htmlFor="end">end date</label>
                        <input name="endDate" type="date"/>
                    </div>
                    <input name="price" type="number" placeholder="cost"/>
                    <button type="submit">Reserve</button>
                </Flex>
            </form>
            
            <div>
                <input onChange={handleStartPrice} type="text" placeholder="start price" />
                <input onChange={handleEndPrice} type="text" placeholder="end price" />
                <input onChange={handleSearch} type="search" placeholder="search by name"/>
                <button>Sort</button>
            </div>

            <div>
                {data.map((hotel, index) => (
                    <div key={index}>
                        <p>{hotel.name} Price: {hotel.price}</p>
                    </div>
                ))}
            </div>

            {reserve ? (
                <div>
                    <h1>You reserved for {reserve.totalDays} and cost is ${reserve.totalPrice} in {reserve.title}</h1>
                </div>
            ) : null}
        </>
    );
}

export default Practice;
