import Position from '../matchpage/Position';

const positions = ["0", "1", "2", "3", "4", "5"]

const Field = (props) => {
  return (
    <div className="field">
      <h2>Field</h2>
      {positions.map(
        (index) => <Position key={"position-"+positions[index]} id={"position-"+positions[index]} players={props.players} dropZones={props.dropZones} />
      )}
    </div>
  );
};
export default Field;