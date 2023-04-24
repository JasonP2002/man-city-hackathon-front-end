import { useState } from 'react'
import CircularProgress from "@mui/joy/CircularProgress";

const PlayerCard = (props) => {
    const [forename, setForename] = useState(props.forename);
    const [surname, setSurname] = useState(props.surname);
    const [mins, setMins] = useState(props.mins);
    const [energy, setEnergy] = useState(5);
    const [subOne, setSubOne] = useState('Sub_One');
    const [subTwo, setSubTwo] = useState('Sub_Two');

    return (
        <div className={forename + " " + surname + " card"}>
            <CircularProgress size="lg" color="primary" determinate value={energy}>
                {`${Math.round(energy)}%`}
            </CircularProgress>
            <h3>{forename} {surname}</h3>
            <h5>Minutes Played: {mins}</h5>
            <h5>Suggested Substitutions:</h5>
            <h6>{subOne} - {subTwo}</h6>
        </div>
    )
};
export default PlayerCard;