import {useDroppable} from '@dnd-kit/core';

const Field = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? 'red' : 'darkgreen',
  };

  return (
    <div className="droppable field" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
export default Field;