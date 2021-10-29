import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route path='/home'>
       <Home></Home>
      </Route>
      <Route route="/login">
        <Login></Login>
      </Route>

   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
