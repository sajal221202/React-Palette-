import React, { useState } from "react"; 
import Tours from "./components/Tours";
import data from "./data";//data import


const App = () => {

  const [tours,setTours]=useState(data);

  //ye fx to Card.js mai toh apan ko isko as a prop fx pass krna hoga 
  //App.js->Tours.js->Card.js flow of passinf this fx as a prop
  function removeTour(id){
    //newTours ek new object bana liya
    const newTours=tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  } 

  //if no tours left then show this
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )

};

export default App;
