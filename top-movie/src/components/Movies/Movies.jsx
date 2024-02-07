import MovieCard from "./MovieCard";
import { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext";
import "./Movies.css";

function Movies() {
    const { movies, categories, actors } = useContext(DataContext);
    // // const [isClicked, setIsClicked] = useState(false);
    // const [selectedMovie, setSelectedMovie] = useState(null);

    // const handleClick = (title) => {
    //     setIsClicked(() => !isClicked);
    //     setSelectedMovie(() => title);
    // };

    return (
        <div className="movies-component">
            <div className="premier">
                <div className="titles">
                    <p className="premier-title">Premiere 2023</p>
                    <p className="premier-subtitle">Comming soon.</p>
                </div>
            </div>

            <div className="movies-container">
                <div className="filters">
                    <div className="filter-title">Filters:</div>
                    <div className="dropdown">
                        <select className="dropbtn">
                            <option value="">Category</option>
                            <option value="genre1">Genre 1</option>
                            <option value="genre1">Genre 1</option>
                            <option value="genre1">Genre 1</option>
                            <option value="genre1">Genre 1</option>
                        </select>
                    </div>
                </div>

                <div className="movie-cards-container">
                    {movies.map((m) => (
                        <MovieCard
                            key={m._id}
                            title={m.title}
                            image={m.image}
                            categories={m.categories}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movies;
