import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signout } from "../features/userSlice";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const [banners, setBanners] = useState([]);

    const handleSignout = () => {
        dispatch(signout());
        navigate("/signin");
    };

    useEffect(() => {
        async function fetch() {
            await axios
                .get("http://localhost:6969/banners")
                .then((res) => setBanners(res.data));
        }
        fetch();
    }, []);

    return (
        <div className="w-full h-auto">
            {user ? (
                <h1 className="text-4xl">Welcome {user?.userName}!</h1>
            ) : (
                <h1 className="text-4xl">hello, world</h1>
            )}

            <div className="w-full h-auto flex flex-col">
                {banners.length > 0
                    ? banners.map((banner) => {
                          return (
                              <div
                                  style={{
                                      backgroundImage: `url(${banner.image})`,
                                  }}
                                  className={`w-full min-h-screen bg-no-repeat bg-cover`}
                                  key={banner.id}
                              ></div>
                          );
                      })
                    : null}
            </div>

            {user && <button onClick={handleSignout}>Signout</button>}
        </div>
    );
}
