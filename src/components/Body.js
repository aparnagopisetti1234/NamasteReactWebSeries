import RestaurantCard from "./RestaurantCard"
import restaurants from "../utils/mockdata"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";




const Body=()=>{



const [listOfRestaurants,setListOfRestaurants]=useState([]);
const [filteredlist,setFilteredList] =useState([]);
const [searchtxt,setSearchtxt]=useState("");
      
    //console.log(listOfRestaurants[0].info);


    useEffect(()=>{
       fetchData();
    },[]);

  
    const fetchData=async()=>{
       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
       const json= await data.json();
       //optional chaining
       setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      if(listOfRestaurants==0){
         return  <Shimmer/>
        }
    return(<div className="body">
         <div className="search">
            <input type="text" placeholder="search" value={searchtxt} onChange={(event)=>{setSearchtxt(event.target.value)}}/>
               <button  onClick={()=>{
              
              const filteredlist= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtxt.toLowerCase()))
               setFilteredList(filteredlist);
            }}>Submit</button>
               
            </div>
             <button id="filter-btn"
             onClick={()=>{
            const filteredlist=  listOfRestaurants.filter((res)=>res.info.avgRating>4);
            setFilteredList(filteredlist);
             }}
             >Top Rated Restaurants</button>
         
     <div className="res-container">
        {filteredlist.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
        
     </div>
     </div> )
 }

 export default Body