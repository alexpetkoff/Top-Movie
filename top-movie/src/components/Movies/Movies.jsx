import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    fetchMovies,
    fetchFilteredMovies,
    setSelectedCategory,
} from "./movieSlice";
import MovieCard from "./MovieCard";
import Filter from "../Filter/Filter";
import {
    loadFromLocalStorage,
    columnSizeArray,
} from "../../utils/utillityFunctions";

function Movies() {
    const [searchedMovie, setSearchedMovie] = useState("");
    const [clickedIndex, setClickedIndex] = useState(null);
    const [columnSize, setColumnSize] = useState(3);

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        const searchQuery = loadFromLocalStorage("selectedMovie");
        const selectedFilterStorage = loadFromLocalStorage("selectedFilter");

        if (searchQuery) {
            setSearchedMovie(searchQuery);
        }

        if (selectedFilterStorage) {
            dispatch(setSelectedCategory(selectedFilterStorage));
            if (selectedFilterStorage === "none") {
                dispatch(fetchMovies());
            } else {
                dispatch(fetchFilteredMovies(selectedFilterStorage));
            }
        } else {
            dispatch(fetchMovies());
        }
    }, [dispatch]);

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;

            if (currentWidth > 1000) {
                setColumnSize(3);
            } else if (currentWidth <= 1000 && currentWidth > 600) {
                setColumnSize(2);
            } else if (currentWidth <= 600) {
                setColumnSize(1);
            }
        };
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleCardClick = (index) => {
        clickedIndex != index ? setClickedIndex(index) : setClickedIndex(null);
    };

    const resultMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
    );

    const sizeMovies = columnSizeArray(resultMovies, columnSize);

    return (
        <>
            <div className="premier">
                <div className="titles">
                    <p className="premier-title">Premiere 2023</p>
                    <p className="premier-subtitle">Comming soon.</p>
                </div>
            </div>
            <div className="movies-component container-inner">
                <Filter
                    setSearchedMovie={setSearchedMovie}
                    searchedMovie={searchedMovie}
                />

                <div className="movies-container">
                    <div className="movie-cards-container">
                        {sizeMovies.map((row, rowIndex) => (
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
                                            rowIndex * columnSize + index
                                        }
                                        onClick={() =>
                                            handleCardClick(
                                                rowIndex * columnSize + index
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
