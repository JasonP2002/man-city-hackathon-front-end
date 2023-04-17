import { useState } from 'react';
const TeamEnergy = (props) => {
    const [energy, setEnergy] = useState(props.energy)
    return (
        <div className="team-energy">
            <h3>Energy</h3>
            <h2><b>{energy+"%"}</b></h2>
        </div>
    )
}
export default TeamEnergy;