import React,{useState,useEffect} from "react";
import "./css/style.css";
const Tempapp=()=>{
    const[city,setCity] = useState(null);
    const[search,setSearch]=useState("Mumbai");

    useEffect(()=>{
        //call API
        const fetchApi= async ()=>{
              const url='http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3264fcf7603e1ebbe51ff2e0321929ae'
              const response=await fetch(url);
              // now we need to convert this response into json
              const resjson=await response.json();
              //console.log("resjson");
              setCity(resjson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
           <div className="box">
              <div className="inputData">
                  <input 
                  type="search" 
                  value={search}
                  className="inputField"
                  onChange={(event) => { setSearch(event.target.value) } }/>
              </div>

          {!city ? (
              <p className="errorMsg">No Data Found</p>
          ) : (
              <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_min}°Cel </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
          )}
        </div>
        </>
    )
}
export default Tempapp;