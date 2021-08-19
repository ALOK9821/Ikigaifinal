import Academics from "./compoenents/academics/Academics";
import Navbar from "./compoenents/academics/Navbar";
import Home from "../src/compoenents/Home/Home"
import Footer from "./compoenents/Home/Footer/Footer";
import Industry from "./compoenents/Industry/Industry";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom"
import Program1 from "./compoenents/Programs/Program1";
import Blog from "./compoenents/Blog/Blog";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/academics" component={Academics} />
        <Route path="/industry" component={Industry} />
        <Route path="/program1" component={Program1} />
        <Route path="/blog" component={Blog} />
      </Switch>
   
    {/* <Academics/> */}
  
    <Footer/>
    </Router>
    </>
  );
}

export default App;
