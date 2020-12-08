import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout';
import Home from './pages/home/home';
import AddUser from './pages/users/addUser/addUser';
import AllUsers from './pages/users/users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/addUser' exact component={AddUser} />
            <Route path='/users' exact component={AllUsers} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
