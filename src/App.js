import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound'
import Blogs from './components/Blogs/Blogs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BlogsItem from './components/BlogsItem/BlogsItem';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateBlog from './components/CreateBlog/CreateBlog';
import CreateItem from './components/CreateItem/CreateItem';
import ItemsItem from './components/ItemsItem/ItemsItem';
import Items from './components/Items/Items';
import Checkout from './components/Checkout/Checkout';
import CompleteOrder from './components/CompleteOrder/CompleteOrder';
import MyOrders from './components/MyOrders/MyOrders';
import Admin from './components/Admin/Admin';
import AdminLogin from './components/AdminLogin/AdminLogin';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageItems from './components/ManageItems/ManageItems';
import ManageOrders from './components/ManageOrders/ManageOrders';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  // check if user is admin
  useEffect(() => {
    fetch(`https://khuda-lagse-backend.herokuapp.com/admin`)
      .then(res => res.json())
      .then(data => setIsAdmin(data[0].isLoggedIn))
  } , [isAdmin])
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <PrivateRoute path="/blog/:blogId">
              <BlogsItem />
            </PrivateRoute>
            <Route path="/items">
              <Items />
            </Route>
            <PrivateRoute path="/item/:itemId">
              <ItemsItem />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/createblog">
              <CreateBlog />
            </Route>
            <Route path="/createitem">
              <CreateItem />
            </Route>
            <Route path="/manageitems">
              <ManageItems />
            </Route>
            <Route path="/manageorders">
              <ManageOrders />
            </Route>
            <PrivateRoute path="/checkout/:checkoutId">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/complete">
              <CompleteOrder />
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/admin">
              <Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            </Route>
            <Route path="/adminlogin">
              <AdminLogin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
