import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';

import AddServices from './componant/Add Services/AddServices';
import ClientOrder from './componant/ClientOrder/ClientOrder';
import Details from './componant/Details/Details';
import Footer from './componant/Footer/Footer';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import ManageAllOrder from './componant/ManageAllOrder/ManageAllOrder';
import MyOrder from './componant/MyOrder/MyOrder';
import Not from './componant/Not/Not';
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
     <Route path="/myorder">
     <MyOrder></MyOrder>
     </Route>
     <Route path="/manage">
     <ManageAllOrder></ManageAllOrder>
     </Route>
     <Route path="/addservice">
      <AddServices></AddServices>
     </Route>
     <Route path="/client">
      <ClientOrder></ClientOrder>
     </Route>
     <Route exact path='/'>
       <Home></Home>
      </Route>
     <Route path="*">
     <Not></Not>
     </Route>

       </Switch>
   <Footer></Footer>
   </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
