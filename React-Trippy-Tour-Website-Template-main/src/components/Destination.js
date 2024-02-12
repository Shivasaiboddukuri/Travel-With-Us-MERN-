import Mountain1 from "../assets/Manali1.jpg";
import Mountain2 from "../assets/Manali2.jpg";
import Mountain3 from "../assets/Lakshadweep1.jpg";
import Mountain4 from "../assets/Lakshadweep2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Take a Tour Make a Life Time Memories</p>
      <div>
        <div className="first-des"> 
      <div className="des-text">
     <h2> Manali , Himachal Pradesh </h2>
     <p>Situated near the end of valley, Manali is one of the most attractive tourist spot not only of Himachal Pradesh, but of International fame also. Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains.

Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti. Now the motor link have been provided up to Leh in Jammu & Kashmir, Pangi valley in Chamba and Kaza of Lahul & Spiti. There are regular bus services to these places from Manali during summer season. It is situated at a distance of 45 kms from Kullu.</p>
      </div>
      <div className="image">
        <img alt="img" src= {Mountain1} />
        <img alt="img" src= {Mountain2} />
      </div>
      </div>
      </div>
      <div className="first-des"> 
      <div className="des-text">
     <h2> Lakshadweep , Union Teritorry Of India </h2>
     <p>Lakshadweep, the group of 36 islands is known for its exotic and sun-kissed beaches and lush green landscape. The name Lakshadweep in Malayalam and Sanskrit means ‘a hundred thousand islands’.

India’s smallest Union Territory Lakshadweep is an archipelago consisting of 36 islands with an area of 32 sq km. It is a uni-district Union Territory and is comprised of 12 atolls, three reefs, five submerged banks and ten inhabited islands. The islands comprise of 32 sq km. The capital is Kavaratti and it is also the principal town of the UT. All Islands are 220 to 440 km away from the coastal city of Kochi in Kerala, in the emerald Arabian Sea. The natural landscapes, the sandy beaches, abundance of flora and fauna and the absence of a rushed lifestyle enhance the mystique of Lakshadweep.</p>
      </div>
      <div className="image">
        <img alt="img" src= {Mountain3} />
        <img alt="img" src= {Mountain4} />
      </div>
      </div>
      </div>
       
       
       
  )
}

export default Destination;
