import {useDroppable} from '@dnd-kit/core';

const Position = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? 'red' : 'lightgreen',
  };

  return (
    <div className={"droppable position "+props.id} ref={setNodeRef} style={style}>
      {props.player}
    </div>
  );
};
export default Position;