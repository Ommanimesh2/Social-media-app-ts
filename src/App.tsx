import { Outlet, Link } from "react-router-dom";
import './App.css'
// Use ES6 and TS as well.
// const App: React.FC = () => {..}
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

// For folder and file structure follow the convention mentioned during the lecture.(refer Services, API and Firebae)
// > services
//    >api
//       >axios.ts
//       >apiService.ts
//       >animalApi.ts
//    >firebase
