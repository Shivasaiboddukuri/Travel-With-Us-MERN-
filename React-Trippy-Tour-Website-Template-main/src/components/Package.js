import "./TripStyles.css";
import PackageData from "./PackageData";
import Trip1 from "../assets/Goa1.jpg";
import Trip2 from "../assets/araku1.jpg";
import Trip3 from "../assets/pondi11.jpg";
import Trip4 from "../assets/laksha.jpg";
import Trip5 from "../assets/manal.jpg";
import { Link } from "react-router-dom";
function Package() {
  return (
    <div className="trip">
   <h1>Available Packages</h1>
   <p>We made people discover themselves via travel</p>
   <div className="tripcard">
   <PackageData
    image={Trip1}
    heading="Trip To Goa"
    heading2="Package Details"
    heading3="Price : Rs.25,000"
    heading4=" Days : 5 days 4 nights"
    heading5= " Including : stay and food"
    heading6="  Note: extra charges for adventure rides etc.."
   
    />
    
     

<PackageData 
    image={Trip2}
    heading="Trip To Araku"
    heading2="Package Details"
    heading3="Price : Rs.15,000"
    heading4=" Days : 3 days 2 nights"
    heading5= " Including : stay and food"
    heading6="  Note: extra charges for camping ,  dinners etc.."
    />

<PackageData
    image={Trip3}
    heading="Trip To Pondicherry"
    heading2="Package Details"
    heading3="Price : Rs.18,500"
    heading4=" Days : 6 days 5 nights"
    heading5= " Including : stay and food"
    heading6="  Note: extra charges for adventure rides , trips etc.."
    />
    <PackageData
    image={Trip4}
    heading="Trip To Lakshadweep"
    heading2="Package Details"
    heading3="Price : Rs.65,500"
    heading4=" Days : 9 days 8 nights"
    heading5= " Including : stay and food"
    heading6="  note: extra charges for adventure rides , beachbath etc.."
    />
    <PackageData
    image={Trip5}
    heading="Trip To Manali"
    heading2="Package Details"
    heading3="Price : Rs.60,800"
    heading4=" Days : 10 days 9 nights"
    heading5= " Including : stay and food"
    heading6="  note: extra charges for adventure rides ,snow rides etc.."
    />

   </div>

   
    </div>
  );
}

export default Package;
