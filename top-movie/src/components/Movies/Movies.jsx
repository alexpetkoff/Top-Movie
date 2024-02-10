import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/dataContext";
import MovieCard from "./MovieCard";
import Filter from "../Filter/Filter";

function Movies() {
    const { movies } = useContext(DataContext);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [columnSize, setColumnSize] = useState(3);

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

    const columnSizeArray = (arr, columnSize) => {
        const resizeArray = [];
        for (let i = 0; i < arr.length; i += columnSize) {
            resizeArray.push(arr.slice(i, i + columnSize));
        }
        return resizeArray;
    };

    const sizeMovies = columnSizeArray(movies, columnSize);

    return (
        <>
            <div className="premier">
                <div className="titles">
                    <p className="premier-title">Premiere 2023</p>
                    <p className="premier-subtitle">Comming soon.</p>
                </div>
            </div>
            <div className="movies-component container-inner">
                <Filter />

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
