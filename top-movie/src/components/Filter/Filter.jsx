import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
    fetchFilteredMovies,
    setSelectedCategory,
    fetchCategories,
} from "../Movies/movieSlice";

import { useEffect } from "react";

import { saveToLocalStorage } from "../../utils/utillityFunctions";

function Filter({ setSearchedMovie }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.movies.categories);
    const selectedFilter = useSelector(
        (state) => state.movies.selectedCategory
    );

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        dispatch(setSelectedCategory(category));
        dispatch(fetchFilteredMovies(category));
    };

    const handleSearchChange = (e) => {
        setSearchedMovie(e.target.value);
    };

    return (
        <div className="filters">
            <div className="filter-field">
                <div className="filter-title">Filters:</div>
                <div className="dropdown">
                    <select
                        className="dropbtn"
                        value={selectedFilter}
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
                    maxLength={15}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}

export default Filter;
