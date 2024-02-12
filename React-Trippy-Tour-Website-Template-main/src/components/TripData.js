import "./TripStyles.css";
import { Link } from "react-router-dom";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image" > 
      <img src={props.image} alt="image"/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button><Link to={'/booknow'}style={{textDecoration:"none"}}>Book Now</Link></button>
    </div>
  );
}

export default TripData;
