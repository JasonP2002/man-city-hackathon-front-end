import {useDraggable} from '@dnd-kit/core';
import PlayerCard from './PlayerCard';

const Player = (props) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
      <button className="player tooltip" ref={setNodeRef} style={style} {...listeners} {...attributes} >
        {props.children}
        <PlayerCard forename={props.forename} surname={props.surname} mins={props.mins} energy={props.energy} />
      </button>
  );
};
export default Player;