import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import("./Home.css")

const Home = () => {
  return (
    <div className = "Home">
        <Navbar />
        <div className="middle-input">
            <input type="text" />
            <ul style = {{ display:"flex", justifyContent:"space-evenly" }}>
                <li>Languages :</li>
                <li>हिंदी</li>
                <li>বাংলা</li>
                <li>मराठी</li>
                <li>اردو</li>
                <li>ଓଡ଼ିଆ</li>
                <li>English</li>
                <li>ગુજરાતી</li>
            </ul>
        </div>
        <Carousel />
    </div>
  )
}

export default Home;


