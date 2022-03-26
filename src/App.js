import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ListStudent from "./components/listStudent";
import Login from './components/loginCPN';

function App() {
  return (
    <div className="app">
      <Router>
          {/* <Login /> */}
          <ListStudent />
      </Router>
      
    </div>
  );
}
export default App;