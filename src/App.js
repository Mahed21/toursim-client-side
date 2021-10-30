import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Details from './componant/Details/Details';
import Footer from './componant/Footer/Footer';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route path='/home'>
       <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/details/:tourId">
      <Details></Details>
      </PrivateRoute>

   </Switch>
   <Footer></Footer>
   </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
