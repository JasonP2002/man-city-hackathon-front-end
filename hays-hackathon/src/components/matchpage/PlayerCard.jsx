import { useState } from 'react'
import CircularProgress from "@mui/joy/CircularProgress";

const PlayerCard = (props) => {
    const [forename, setForename] = useState(props.forename);
    const [surname, setSurname] = useState(props.surname);
    const [mins, setMins] = useState(props.mins);
    const [energy, setEnergy] = useState(props.energy);

    return (
        <div className={forename + " " + surname + " card"}>
            <CircularProgress size="lg" color="primary" determinate value={props.energy}>
                {`${Math.round(props.energy)}%`}
            </CircularProgress>
            <h4>{forename} {surname}</h4>
            <h5>Minutes Played: {mins}</h5>
            <h5>Suggested Substitutions:</h5>
            <h6>One</h6>
            <h6>Two</h6>
        </div>
    )
};
export default PlayerCard;