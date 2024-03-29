import { MagnifyingGlass } from "react-loader-spinner";

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <MagnifyingGlass
                visible={true}
                height="160"
                width="160"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="var(--green)"
                className="loading-spinner"
            />
        </div>
    );
}

export default LoadingSpinner;
