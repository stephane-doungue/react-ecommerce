import React from "react"
import Categorie from "./Categorie"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categorie />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
