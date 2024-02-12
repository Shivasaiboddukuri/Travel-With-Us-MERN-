import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Goa.jpg";
import Trip2 from "../assets/Araku.jpg";
import Trip3 from "../assets/Pondi.jpg";

function Trip() {
  return (
    <div className="trip">
   <h1>Available Packages</h1>
   <p>We made people discover themselves via travel</p>
   <div className="tripcard">
   <TripData 
    image={Trip1}
    heading="Trip To Goa"
    text="Goa's tourist season runs from October to March, when the weather is warm and dry. Most beach shacks open in November. They pack up by April or May due to the extreme heat and humidity. The southwest monsoon brings rain from June to September."
   
    />
    
     

<TripData 
    image={Trip2}
    heading="Trip To Araku"
    text="Vizag is a popular tourist destination mainly known for its beaches. Located at a distance of 120 km from Vizag is a beautiful hill station called Araku which is as popular as the beaches of Vizag.

    Blessed with enchanting streams, lush green forests, beautiful waterfalls."
    />

<TripData 
    image={Trip3}
    heading="Trip To Pondicherry"
    text="Pondicherry was like a dream. A beautiful dream that was full of clean sandy beaches, laid back colourful streets and European architecture.
    
    It’s quite a bizarre feeling seeing all French on street signs, cafés and from people’s mouths here! But, the food was to die for. "
    />

   </div>

   
    </div>
  );
}

export default Trip;
