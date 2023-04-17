import { useDroppable } from "@dnd-kit/core";

const Bench = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? "red" : "#6CABDD",
    border: '10px solid rgba(0, 0, 0, 1)',
    borderRadius: '20px'
  };

  return (
    <div className="droppable bench" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
export default Bench;
