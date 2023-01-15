import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../components/Header';
import Layout from '../containers/Layout';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Orders from '../pages/Orders';
import '../styles/glogal.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App
