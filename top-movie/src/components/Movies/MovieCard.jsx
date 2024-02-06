import "./MovieCard.css";

function MovieCard({ title, image, categories, handleClick }) {
    return (
        <div className="card-component">
            <div className="image-container">
                <img src={image} alt="movie image" />
            </div>
            <div className="categories-container">
                {categories.map((c) => (
                    <span key={c._id} className="category">
                        {c.name}
                    </span>
                ))}
            </div>
            <div className="title">
                <p className="movie-title">{title}</p>
            </div>
            <button onClick={() => handleClick(title)} className="more-btn">
                View more
            </button>
        </div>
    );
}

export default MovieCard;
