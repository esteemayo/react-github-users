import { ToastContainer } from "react-toastify";
import axios from "axios";

import Users from "./components/Users";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

axios.defaults.baseURL = "https://api.github.com";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Users />
    </div>
  );
}

export default App;
