import { useDispatch, useSelector } from "react-redux";
import "./Actors.css";
import { useContext, useEffect } from "react";
import { fetchActors } from "./actorsSlice";
// import DataContext from "../../contexts/dataContext";

function Actors() {
    // const { actors } = useContext(DataContext);
    const dispatch = useDispatch();
    const actors = useSelector((state) => state.actors.actors);

    useEffect(() => {
        dispatch(fetchActors());
    }, [dispatch]);

    return (
        <>
            <div className="premier">
                <div className="titles">
                    <p className="premier-title">Actors</p>
                </div>
            </div>

            <div className="actors-component container-inner">
                <div className="actors-grid">
                    {actors.map((actor, index) => (
                        <div key={index} className="actor-card">
                            <div className="image-container">
                                <img
                                    src={actor.image}
                                    alt=""
                                    className="actor-photo"
                                />
                            </div>
                            <div className="actor-name">{actor.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Actors;
