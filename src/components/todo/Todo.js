import { TodoStyles, RemoveStyles } from "./TodoStyles";
import checkMark from "../../icons8-check-mark-button-48.png";

const Todo = ({
  todo: { id, text, isComplete },
  index,
  removeTodo,
  setIsComplete,
}) => {
  const handleRemove = (e) => {
    removeTodo(e.target.id);
  };

  return (
    <TodoStyles>
      <RemoveStyles onClick={(e) => setIsComplete(id)}>
        {isComplete ? <img src={checkMark} /> : <span>🔴</span>}
      </RemoveStyles>

      <h1 style={{ margin: "20px" }}>{text}</h1>
      <div onClick={handleRemove}>❌</div>
    </TodoStyles>
  );
};

export default Todo;
