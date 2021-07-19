// import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <div
        className="bg-light"
        style={{
          height: "100vh",
        }}
      >
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
