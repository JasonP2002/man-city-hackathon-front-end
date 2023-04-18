import { useState } from 'react'

const PlayerCard = (props) => {
    const [forename, setForename] = useState(props.forename);
    const [surname, setSurname] = useState(props.surname);
    const [mins, setMins] = useState(props.mins);
    const [energy, setEnergy] = useState(props.energy);

    return (
        <div className={forename + " " + surname + " card"}>
            <h3 className="card-energy">{energy}</h3>
            <h2>{forename} {surname}</h2>
            <h3>Minutes Played: {mins}</h3>
            <h4>Suggested Substitutions:</h4>
            <h5>One</h5>
            <h5>Two</h5>
        </div>
    )
};
export default PlayerCard;