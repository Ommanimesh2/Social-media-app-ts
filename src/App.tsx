import { Outlet, Link } from "react-router-dom";
import './App.css'
export default function App() {
  return (
    <div>
      <h1>Omm's social media</h1>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/signup">Signup</Link>
      </nav>
      <Outlet />
    </div>
  );
}