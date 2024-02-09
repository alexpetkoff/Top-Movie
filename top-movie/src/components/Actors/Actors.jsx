import "./Actors.css";
import { useContext } from "react";
import DataContext from "../../contexts/dataContext";

function Actors() {
    const { actors } = useContext(DataContext);
    console.log(actors);

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
