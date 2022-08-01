import { useState, useEffect } from "react";
import Todo from "./components/todo/Todo";
import TodoForm from "./components/todoForm/toDoForm";
import AppStyles from "./AppStyles";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Study React", isComplete: false },
    { id: 2, text: "Get some sunshine", isComplete: false },
    { id: 3, text: "Cook meals for the week", isComplete: false },
  ]);

  const [value, setValue] = useState("");

  const removeTodo = (id) => {
    const index = Number(id);
    console.log(`Removing todo ${index}`);
    const temp = [...todos];
    // destructively remove our todo item from the todos state
    temp.splice(id, 1);
    setTodos(temp);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplete: false }];
    setTodos(newTodos);
    setValue("");
  };

  const setIsComplete = (id) => {
    // const index = Number(id);
    let currentIndex;
    console.log(`Update isComplete for ${id}`);
    // Find index of todo with id
    //
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        currentIndex = index;
      }
    });

    const tempTodo = todos.filter((todo) => todo.id === id);
    todos.splice(currentIndex, 1);
    const temp = [
      ...todos,
      {
        id: tempTodo[0].id,
        text: tempTodo[0].text,
        isComplete: !tempTodo[0].isComplete,
      },
    ];
    console.log(temp);
    setTodos(temp);
  };

  const renderTodos = () => {
    return todos.map((todo, i) => (
      <Todo
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        index={i}
        setIsComplete={setIsComplete}
      />
    ));
  };

  useEffect(() => {
    console.log("Inside useEffect");

    // Call  toDos on initial render

    // const  fetchTodos = async = () => {
    //   const response = await fetch('/todos');
    //   // waits until the request completes...
    //   console.log(response);
    // }

    // getTodos();
  }, []);

  return (
    <AppStyles>
      My Todos
      {renderTodos()}
      <TodoForm addTodo={addTodo} />
    </AppStyles>
  );
}

export default App;
