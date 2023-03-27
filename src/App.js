import logo from "./logo.svg";
import "./App.scss";
import Header from "./containers/partials/Header/Header";
import ToDoList from "./containers/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
