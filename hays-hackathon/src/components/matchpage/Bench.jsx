import {useDroppable} from '@dnd-kit/core';

const Bench = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? 'red' : 'darkgrey',
  };

  return (
    <div className="droppable bench" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
export default Bench;
