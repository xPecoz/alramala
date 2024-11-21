import React from 'react'
import './Production.css'
import fitOut from "../../imgs/fitOut.webp";
import furniture from "../../imgs/futniture.webp";
import upholstery from "../../imgs/upholstery.jpg";
import staircases from "../../imgs/staircases.webp";
import partitions from "../../imgs/partitions.webp";
import ceiling from "../../imgs/ceiling.webp";
import doors from "../../imgs/doors.jpg";
import moroccanHandcraft from "../../imgs/moroccan handcraft.jpg";
const Production = () => {
  return (
    <section className="production">
      <h1>Production Lines</h1>
    <div className="container">
      <div className="card">
        <p>fit out</p>
        <img src= {fitOut} alt="fit-out" />
      </div>
      <div className="card">
      <p>furniture</p>
        <img src= {furniture} alt="furniture" />
      </div>
      <div className="card">
      <p>upholstery</p>
        <img src= {upholstery} alt="upholstery" />
      </div>
      <div className="card">
      <p>staircases</p>
        <img src= {staircases} alt="staircases" />
      </div>
      <div className="card">
      <p>partitions</p>
        <img src= {partitions} alt="partitions" />
      </div>
      <div className="card">
      <p>ceiling</p>
        <img src= {ceiling} alt="ceiling" />
      </div>
      <div className="card">
      <p>doors</p>
        <img src= {doors} alt="doors" />
      </div>
      <div className="card">
      <p>moroccan handcraft</p>
        <img src= {moroccanHandcraft} alt="moroccanHandcraft" />
      </div>
    </div>
    </section>
  )
}

export default Production