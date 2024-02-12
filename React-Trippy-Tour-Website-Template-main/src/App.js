import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

import Navbar from "./components/Navbar";
import Signup from "./routes/Signup";
import SignIn from "./routes/SignIn";
import Booknow from "./routes/Booknow";


export default function App() {
  return (
    <div className="App">
      
      <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/about" element={ <About />}/>
    <Route path="/service" element={ <Service />}/>
    <Route path="/contact" element={ <Contact />}/>
    <Route path="/signup" element={ <Signup />}/>
    <Route path="/signin" element={ <SignIn />}/>
    <Route path="/booknow" element={ <Booknow />}/>
   
</Routes>

      
    </div>
  );
}
