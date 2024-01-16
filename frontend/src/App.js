import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Login />
      </div>
      <div className="container my-3">
        <SignUp />
      </div>
    </>
  );
}

export default App;
