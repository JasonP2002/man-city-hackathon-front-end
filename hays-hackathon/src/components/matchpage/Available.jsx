import {useDroppable} from '@dnd-kit/core';
import { margin, width } from '@mui/system';

const Available = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    border: '5px dotted rgba(0, 0, 0, 1)',
    borderRadius: '20px',
    width: '420px',
    marginTop: '-12px'
  };

  return (
    <div className="droppable available" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
export default Available;
