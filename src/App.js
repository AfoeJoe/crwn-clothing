import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from './pages/shoppage/shop.component'
import Header from "./components/Header/Header.component";
const HatsPage = () => <div>Hats page</div>;
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
        <Route path="/shop/jackets" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
