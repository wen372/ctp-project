import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import GameSelectionPage from './pages/GameSelectionPage';
import TicTacToePage from './pages/TicTacToePage';
import TetrisPage from './pages/TetrisPage';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-5">
      <Link className="navbar-brand" to="/">Games2Go</Link>
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item ">
          <NavLink className="nav-link " exact to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


function App() {
  return (
    <Router>
      <Navigation />
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/TicTacToe" component= {TicTacToePage}/>
            <Route path="/Tetris" component={TetrisPage}/>
            <Route path="/" component= {GameSelectionPage}/>
            
            
          </Switch>

         
        </div>
      </div>
    </Router>
);
}

export default App;
