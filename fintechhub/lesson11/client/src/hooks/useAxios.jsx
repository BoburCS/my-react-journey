import axios from "axios";

async function useAxios(url, callback) {
    try {
        const res = await axios.get(url);
        callback(res.data);
    }
    catch(err) {
        console.log(err);
    }
}

export default useAxios;
