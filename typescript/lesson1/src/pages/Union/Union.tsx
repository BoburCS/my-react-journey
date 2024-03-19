type UnionProps = {
    status: "loading" | "success" | "error"; // Union
}

function Union(props: UnionProps) {
    let message;
    if (props.status === "loading") message = "Loading";
    if (props.status === "success") message = "Successfully fetched the data";
    if (props.status === "error") message = "Error";
    
    return (
        <div>
            <h3>Status - {message}</h3>
        </div>
    );
}

export default Union;
