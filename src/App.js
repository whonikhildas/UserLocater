import { useState } from 'react';
import './App.css';

function App() {
  const[lat,setLat]=useState()
  const[lon,setLon]=useState()
  const[userAdress, setUserAdress]=useState()

  const geo = navigator.geolocation;

  //Get User Location
  geo.getCurrentPosition(userCoords)
  function userCoords(position){
    let userlat = position.coords.latitude
    let userlon = position.coords.longitude
    // console.log(userlat,userlon)
    setLat(userlat)
    setLon(userlon)
  }

  const getUserAddress = async ()=>{
    let url =`https://api.opencagedata.com/geocode/v1/json?key=7d32d02cd0ec46bb9c612d1f9f21e5c3&q=${lat}%2C+${lon}&pretty=1&no_annotations=1`
    const loc = await fetch(url)
    const data = await loc.json()
    // console.log(data)
    setUserAdress(data.results[0].formatted)
  }

  const handleGetAdress = ()=> {
    getUserAddress()
  }



   return (
    <>
    <h1>Current Location</h1>
    {/* <h1>Latitude:{lat}<br/>Longitude:{lon}</h1> */}
    <button onClick={handleGetAdress}>Get</button>
    <h2>{userAdress}</h2>
    </>
  );
}

export default App;
