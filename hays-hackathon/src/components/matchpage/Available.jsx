import {useDroppable} from '@dnd-kit/core';

const Available = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? 'red' : 'darkcyan',
  };

  return (
    <div className="droppable available" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
export default Available;
