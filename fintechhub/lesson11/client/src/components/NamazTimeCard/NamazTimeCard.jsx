
function NamazTimeCards({ image, title, time }) {
    const [hours, minutes] = time.split(":");
    const paddedHours = String(hours).padStart(2, "0");
    const formattedTime = `${paddedHours}:${minutes}`;

    return (
        <div className="namaz-time-card">
            <img src={image} alt={title} />
            <h6>{title}</h6>
            <p>{formattedTime.replace(/ am| pm/i, "")}</p>
        </div>
    );
}

export default NamazTimeCards;
