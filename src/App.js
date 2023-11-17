import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import CreateBlog from './components/createBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blogdetails from './components/blogDetails';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/details/:id">
            <Blogdetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;