
import { CDN_URL } from "../utils/constants"

const listOfRestaurants=[
    {
        "info": {
          "id": "42060",
          "name": "Sharief Bhai",
          "cloudinaryImageId": "mmavnrootu7ypscic1qm",

          "cuisines": [
            "Biryani",
            "Mughlai",
            "Arabian",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
      
          
          },
          "parentId": "5734",
          "avgRatingString": "4.1",
          "sla": {
            "deliveryTime": 20
          }
      }
]

const RestaurantCard=(props)=>{
    const{resData}=props
    const {name,cuisines,avgRating,cloudinaryImageId,sla} =resData.info
    return(<div className="res-card">
     <img className="image" alt="biryani" 
     src={CDN_URL+cloudinaryImageId} />
     <h2> {name}</h2>
     <h5>{cuisines.join(", ")}</h5>
     <h4>{avgRating+" Stars"}</h4>
     <h4>{sla.deliveryTime+" minutes"}</h4>
    
     </div>)
 
 }

 export default RestaurantCard