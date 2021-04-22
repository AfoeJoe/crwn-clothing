import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/Header/Header.component";
import SignInOut from "./pages/signin-and-signout/signin-and-signout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
const HatsPage = () => <div>Hats page</div>;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      createUserProfileDocument(this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/jackets" component={HatsPage} />
          <Route path="/signin" component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
