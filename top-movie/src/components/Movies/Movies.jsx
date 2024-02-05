import "./Movies.css";

function Movies() {
    return (
        <div className="movies-component">
            <div className="premier">
                <div className="titles">
                    <p className="premier-title">Premiere 2023</p>
                    <p className="premier-subtitle">Comming soon.</p>
                </div>
            </div>

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
        </div>
    );
}

export default Movies;
