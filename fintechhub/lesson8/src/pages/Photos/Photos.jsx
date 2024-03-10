import { useState, useEffect } from "react";
import styled from "styled-components";

const Grid = styled.div`
    padding: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
`;

const url = "https://jsonplaceholder.typicode.com/photos";

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [total, setTotal] = useState(10);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPhotos(data.slice(0, total)));
    }, [total]);

    useEffect(() => () => setTotal(10), []);

    return (
        <>
            <div>Photos</div>
            <Grid>
                {photos.length > 0 ? (
                    photos.map((photo) => (
                        <div className="image-container" key={photo.id}>
                            <img src={photo.url} alt={photo.title} />
                        </div>
                    ))
                ) : (
                    <p>no data</p>
                )}
            </Grid>
            <button onClick={() => setTotal((prev) => prev + 10)}>
                +See 10 more
            </button>
        </>
    );
}

export default Photos;
