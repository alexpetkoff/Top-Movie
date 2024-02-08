import "./Actors.css";
import { useContext } from "react";
import DataContext from "../../contexts/dataContext";

function Actors() {
    const { actors } = useContext(DataContext);
    console.log(actors);
}

export default Actors;
