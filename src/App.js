import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route, Switch } from 'react-router';
import Products from "./component/Products";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products:id" component={Product}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
      <Switch />
      <Footer/>
    </>
  );
}

export default App;
