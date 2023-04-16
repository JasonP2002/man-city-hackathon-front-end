import Position from '../matchpage/Position';

const playersOnField = 11;
const positions = Array.from({length: playersOnField}, (_, i) => (i + 1).toString())

const Field = (props) => {
  return (
    <div className="field">
      {positions.map(
        (index) => <Position key={"position-"+positions[index]} id={"position-"+positions[index]} players={props.players} dropZones={props.dropZones} />
      )}
    </div>
  );
};
export default Field;