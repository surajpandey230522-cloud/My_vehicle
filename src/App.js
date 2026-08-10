
import './App.css';
import Navbar from './component/Navbar'
import Hero from './component/Hero';
import Footor from './component/Footor'
import About from './component/About';
import Service from './component/Service'
import Contact from './component/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
<>

<Router>
   <Navbar/>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Service}/>
        <Route  path="/contact" component={Contact}/>
      </Switch>
  <Footor/>
</Router>

</>

  );
}

export default App;
