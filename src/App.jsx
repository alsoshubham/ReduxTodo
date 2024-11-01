import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>My Task Board</h1>
      <p>tasks to keep organized</p>
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
