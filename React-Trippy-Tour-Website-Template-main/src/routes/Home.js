import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import frontpg from '../assets/frontpage.jpg'
function Home() {
  return (
    <>
       <Navbar />
  <Hero 
  
  cName="hero"
  heroImg={frontpg}
  title="We Help You Travel "
  text="we make your trip memorable."
  buttonText="Message Us"
  url="/signin"
  btnClass="show"


/>
  <Destination />
  <Trip />
  <Footer/>

    </>
  );
}

export default Home;
