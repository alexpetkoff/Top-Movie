import { createContext, useEffect, useState } from "react";
import {
    getMovies,
    getActors,
    getCategories,
    getFilteredMovies,
} from "../fetching/sanity";

const DataContext = createContext();

DataContext.displayName = "DataContext";

export const DataProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("none");
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies);
        });

        getActors().then((actors) => {
            setActors(actors);
        });

        getCategories().then((categories) => {
            setCategories(categories);
        });
    }, []);

    useEffect(() => {
        const fetchFilteredMovies = async () => {
            if (selectedFilter === "none") {
                setFilteredMovies(movies);
            } else {
                const filtered = await getFilteredMovies(selectedFilter);
                setFilteredMovies(filtered);
            }
        };

        fetchFilteredMovies();
    }, [selectedFilter, movies]);

    return (
        <DataContext.Provider
            value={{
                movies: filteredMovies,
                actors,
                categories,
                selectedFilter,
                setSelectedFilter,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
