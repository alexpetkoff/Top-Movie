import { createContext, useEffect, useState } from "react";
import { getMovies, getActors, getCategories } from "../utils/sanity";

const DataContext = createContext();

DataContext.displayName = "DataContext";

export const DataProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [categories, setCategories] = useState([]);

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

    return (
        <DataContext.Provider
            value={{
                movies,
                actors,
                categories,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
