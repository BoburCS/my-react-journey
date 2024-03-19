type UnionProps = {
    status: "loading" | "success" | "error"; // Union
}

function Union({ status }: UnionProps) {
    let message;
    if (status === "loading") message = "Loading";
    if (status === "success") message = "Successfully fetched the data";
    if (status === "error") message = "Error";
    
    return (
        <div>
            <h3>Status - {message}</h3>
        </div>
    );
}

export default Union;
