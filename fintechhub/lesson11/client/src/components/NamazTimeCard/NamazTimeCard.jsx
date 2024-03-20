
function NamazTimeCards({ image, title, time }) {
    return (
        <div className="namaz-time-card">
            <img src={image} alt={title} />
            <h6>{title}</h6>
            <p>{time.replace(/ am| pm/i, "")}</p>
        </div>
    );
}

export default NamazTimeCards;
