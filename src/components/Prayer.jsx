const Prayer = ({ name, image, time }) => {
    return (
        <div className="prayer">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{time}</p>
        </div>
    );
}

export default Prayer;