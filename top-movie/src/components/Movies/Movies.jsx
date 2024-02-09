import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/dataContext";
import MovieCard from "./MovieCard";
import Filter from "../Filter/Filter";

function Movies() {
    const { movies, categories } = useContext(DataContext);
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleCardClick = (index) => {
        clickedIndex != index ? setClickedIndex(index) : setClickedIndex(null);
    };

    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    const chunkedMovies = chunkArray(movies, 3);

    return (
        <>
            <div className="premier">
                <div className="titles">
                    <p className="premier-title">Premiere 2023</p>
                    <p className="premier-subtitle">Comming soon.</p>
                </div>
            </div>
            <div className="movies-component">
                <Filter />

                <div className="movies-container container-inner">
                    <div className="movie-cards-container">
                        {chunkedMovies.map((row, rowIndex) => (
                            <div key={rowIndex} className="grid-row">
                                {row.map((m, index) => (
                                    <MovieCard
                                        key={m._id}
                                        title={m.title}
                                        image={m.image}
                                        categories={m.categories}
                                        overview={m.overview}
                                        crew={m.crewMembers}
                                        popularity={m.popularity}
                                        cast={m.castMembers}
                                        isClicked={
                                            clickedIndex ===
                                            rowIndex * 3 + index
                                        }
                                        onClick={() =>
                                            handleCardClick(
                                                rowIndex * 3 + index
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;
