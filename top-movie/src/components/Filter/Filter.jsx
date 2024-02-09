import "./Filter.css";
import { useContext, useState } from "react";
import DataContext from "../../contexts/dataContext";

function Filter() {
    const { categories, selectedFilter, setSelectedFilter } =
        useContext(DataContext);

    const onFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    return (
        <div className="filters">
            <div className="filter-title">Filters:</div>
            <div className="dropdown">
                <select
                    className="dropbtn"
                    value={selectedFilter}
                    onChange={onFilterChange}
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
    );
}

export default Filter;
