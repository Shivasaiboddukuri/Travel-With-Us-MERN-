import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid"
      heroImg={AboutImg}
      title="Service"
      buttonText="Message Us"
      url="/contact"
      btnClass="show"
      /><br></br>
      <h1>Small Packages</h1>
     
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
