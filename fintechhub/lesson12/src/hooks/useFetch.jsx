/**
 * GET
 */
export const useFetchGet = async (url, callback) => {
    try {
        const res = await fetch(url, { method: "GET" });

        callback(res.json());
    }
    catch(err) {
        console.log(err);
    }
}

/**
 * POST
 */
export const useFetchPost = async (url, data, callback) => {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        
        callback(res.json());
    }
    catch(err) {
        console.log(err);
    }
}

/**
 * DELETE
 */
export const useFetchDelete = async (url, callback) => {
    try {
        const res = await fetch(url, { method: "DELETE" });

        callback(res.json());
    }
    catch(err) {
        console.log(err);
    }
}

/**
 * PUT
 */
export const useFetchPut = async (url, data, callback) => {
    try {
        const res = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    
        callback(res.json());
    }
    catch(err) {
        console.log(err);
    }
}
