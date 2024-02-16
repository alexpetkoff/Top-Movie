import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
    fetchFilteredMovies,
    setSelectedCategory,
    fetchCategories,
    fetchMovies,
} from "../Movies/movieSlice";

import { useEffect } from "react";
import {
    loadFromLocalStorage,
    saveToLocalStorage,
} from "../../utils/utilFuncs";

function Filter({ setSearchedMovie, searchedMovie }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.movies.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        saveToLocalStorage("selectedFilter", category);
        dispatch(setSelectedCategory(category));

        if (category === "none") {
            dispatch(fetchMovies());
        } else {
            dispatch(fetchFilteredMovies(category));
        }
    };

    const handleSearchChange = (e) => {
        saveToLocalStorage("selectedMovie", e.target.value);
        setSearchedMovie(e.target.value);
    };

    return (
        <div className="filters">
            <div className="filter-field">
                <div className="filter-title">Filters:</div>
                <div className="dropdown">
                    <select
                        className="dropbtn"
                        value={
                            loadFromLocalStorage("selectedFilter")
                                ? loadFromLocalStorage("selectedFilter")
                                : "none"
                        }
                        onChange={handleCategoryChange}
                    >
                        <option value="none">None</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="search-field">
                <input
                    className="search-input"
                    placeholder="Search title..."
                    type="text"
                    value={
                        loadFromLocalStorage("selectedMovie")
                            ? searchedMovie
                            : ""
                    }
                    maxLength={15}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}

export default Filter;
