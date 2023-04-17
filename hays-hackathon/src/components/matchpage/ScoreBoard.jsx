import { useState } from 'react';
const ScoreBoard = (props) => {
    const [hometeam, setHomeTeam] = useState(props.hometeam)
    const [homescore, setHomeScore] = useState(props.homescore)
    const [awayteam, setAwayTeam] = useState(props.awayteam)
    const [awayscore, setAwayScore] = useState(props.awayscore)
    return (
        <div className="score-board">
            <div className="scoreboard-team"><h3>{hometeam}</h3></div>
            <div className="scoreboard-score"><h2>{homescore}</h2></div>
            <div className="scoreboard-score"><h2>{awayscore}</h2></div>
            <div className="scoreboard-team"><h3>{awayteam}</h3></div>
        </div>
    )
}
export default ScoreBoard;