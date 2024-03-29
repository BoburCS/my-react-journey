import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./productDetail.css";

const api = {
    key: "qFPaPY06AnB4QTjJHidf042qUoQV4nO095f_pSb1TGg",
    url: "https://api.unsplash.com"
};

function ProductDetail() {
    const navigate = useNavigate();
    const [detail, setDetail] = useState(null);
    const [image, setImage] = useState(null);

    const { id } = useParams();

    async function fetchData() {
        try {
            const res = await axios.get(`http://localhost:8000/products/${id}`);
            setDetail(res.data);
            const image = await axios.get(`${api.url}/search/photos?page=1&query=${res.data.image}&client_id=${api.key}`);
            setImage(image.data.results[0].urls.small);
            console.log(image.data.results[0].urls.small)
            console.log(image)
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-detail-page">
            {detail  ? (
                <>
                    <h1>{detail.name}</h1>
                    <img src={image} alt={detail.name} />
                    <p>{detail.characteristics}</p>
                    <p>${detail.price}</p>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </>
            ) : <p>404 Not Found</p>
            }
        </div>
    );
}

export default ProductDetail;
