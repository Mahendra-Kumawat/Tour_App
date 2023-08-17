import React, { useState } from "react";
import './App.css'
import Title from "./components/Title";
import Tours from "./components/Tours";
import data from './data'
import { toast } from "react-toastify";



function App() {

  //  to declare useState variables 

  const [tourData, setTourData] = useState(data)

  function resetHandler(){
    toast.success('Refreshed')
    setTourData(data)
  }


  function removeHandler(id) {
    let newTourData = tourData.filter((tour) => {
      return (tour.id !== id)
  })
    toast.success('Card Removed')
    setTourData(newTourData)
  }

  if (tourData.length === 0) {
    return (
      <div className="refresh">
        <h3>
          No Tours Left
        </h3>
        <button className="refresh-btn" onClick={resetHandler}>
          Refresh
        </button>
      </div>
    )
  }





  return (
    <div className="App">
      <Title></Title>

      <Tours toursData={tourData} filterData={removeHandler}></Tours>

    </div>
  )
}

export default App;