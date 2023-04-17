import { useState } from 'react';
const ScoreBoard = (props) => {
    const [hometeam, setHomeTeam] = useState(props.hometeam)
    const [homescore, setHomeScore] = useState(props.homescore)
    const [awayteam, setAwayTeam] = useState(props.awayteam)
    const [awayscore, setAwayScore] = useState(props.awayscore)
    return (
        <div className="score-board">
            <div className="scoreboard-team"><h4>{hometeam}</h4></div>
            <div className="scoreboard-score"><h3>{homescore}</h3></div>
            <div className="scoreboard-score"><h3>{awayscore}</h3></div>
            <div className="scoreboard-team"><h4>{awayteam}</h4></div>
        </div>
    )
}
export default ScoreBoard;