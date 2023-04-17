import Position from './Position';

const generateFormation = (props) => {
    const columns = props.form.split('-')
    let currentColumn = [];
    let formationColumns = [];
    let positionNum = 1;
    let positionNumString = "";

    //Goalkeeper
    formationColumns.push(
        <div className="grid-item column-0" key={"column-0"}>
            <Position key={"position-0"} id={"position-0"} player={getPlayerAtPosition(props, "position-0")} />
        </div>
    )

    //Formation
    for (let i = 0; i < columns.length; i++) {
        //For each column of formation
        for (let j = 0; j < parseInt(columns[i]); j++) {
            positionNumString = "position-" + positionNum.toString()

            //Add position
            currentColumn.push(
                <Position key={positionNumString} id={positionNumString} player={getPlayerAtPosition(props, positionNumString)} />
            )

            positionNum++;
        }

        formationColumns.push(<div className={"grid-item column "+(i+1).toString()} key={"column "+(i+1).toString()}>{currentColumn}</div>)
        currentColumn = []
    }
    
    return formationColumns;
}

const getPlayerAtPosition = (props, id) => {
    return props.players.filter((_, i) => props.dropZones[i] === id);
}

const Field = (props) => {
    return (
        <div className={"field"}>
            {generateFormation(props)}
        </div>
    )
}
export default Field;