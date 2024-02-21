import "./TripStyles.css";
import { Link } from "react-router-dom";
function PackageData(props) {
  return (
    <div className="t-card">
      <div className="t-image" > 
      <img src={props.image} alt="image"/>
      </div>
      <h3>{props.heading}</h3>
      <br></br>
      <h3>{props.heading2}</h3>
      <h7>{props.heading3}</h7><br></br>
      <h7>{props.heading4}</h7><br></br>
      <h7>{props.heading5}</h7><br></br>
      <h7>{props.heading6}</h7><br></br>
      <h7>{props.heading7}</h7>
      <br></br>
      <button><Link to={'/booknow'}style={{textDecoration:"none"}}>Book Now</Link></button>
    </div>
  );
}

export default PackageData;
