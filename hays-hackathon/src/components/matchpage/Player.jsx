import {useDraggable} from '@dnd-kit/core';
import PlayerCard from './PlayerCard';

const displayPlayerCard = (props) => {
  //Working on this
  // return <PlayerCard forename={props.forename} surname={props.surname} mins={props.mins} energy={props.energy} />
}
const Player = (props) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
      <button className="player" ref={setNodeRef} style={style} {...listeners} {...attributes} onMouseOver={displayPlayerCard(props)}>
        {props.children}
      </button>
  );
};
export default Player;