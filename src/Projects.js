import './styles/Project.css'
import {PSArray}  from './AppPhotos/PSPhotos/ps.js'
import { useState } from 'react';

export default function Projects(){
    const [backgroundImage, setBackgroundImage] = useState(PSArray[0])

    function handleLeftClick(image) {
        const index = PSArray.findIndex(x => x === image)
        if(index === 0){
            setBackgroundImage(PSArray[PSArray.length - 1])
        }else{
            setBackgroundImage(PSArray[index - 1])
        }
      }
  
      function handleRightClick(image) {
        const index = PSArray.findIndex(x => x === image)
        if(index < PSArray.length - 1){
            setBackgroundImage(PSArray[index + 1]) 
        }else{
            setBackgroundImage(PSArray[0])
        }
      }

    return(
        <>
            <h1 className='Info-title'>Web Applications</h1>
            <div className="Project-div">
                <h2 className='Project-title'>Aqua Prop Inventory</h2>
                <div className='Project-div'>
                    <h3 className='Project-title'>Description</h3>
                    <div className='Project-div'>
                        <p className='Project-writing'>
                            This application is password protected for keeping inventory for a sand company. Aqua Prop is able to keep track of the sand showing up on site and the sand used on site. Also there was a certain equation to keep track of moisture. If there was some delivered bad sand they could also keep inventory of amount. Aqua Prop had the ability to export the data to an Excel sheet. For the companies hiring Aqua Prop, they were able to keep track of the their sites.
                        </p>
                    </div>
                    <h3 className='Project-title'>Programs</h3>
                    <ul className="skill-list">
                        <li className="Project-item">Linux</li>
                        <li className="Project-item">SQLite</li>
                        <li className="Project-item">Postgres</li>
                        <li className="Project-item">Ruby on Rails</li>
                        <li className="Project-item">Serializer</li>
                        <li className="Project-item">Bcrypt</li>
                        <li className="Project-item">Bootstrap</li>
                        <li className="Project-item">Moment</li>
                        <li className="Project-item">CSS</li>
                        <li className="Project-item">React</li>
                        <li className="Project-item">React Router Dom</li>
                    </ul>
                    <h3 className='Project-title'>Photo</h3>
                    <div
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                        className="houseImageBackground"
                    >
                    
                        <button
                        className="leftArrowButton"
                        onClick={() => handleLeftClick(backgroundImage)}
                        >
                        <img
                            className="leftArrow"
                            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                            alt="Left Arrow"
                        />
                        </button>
                        <button
                        className="rightArrowButton"
                        onClick={() => handleRightClick(backgroundImage)}
                        >
                        <img
                            className="rightArrow"
                            src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                            alt="Right Arrow"
                        /> </button>
                    </div> 
                </div>
            </div>
            <h1 className='Info-title'>iOS Applications</h1>
        </>
    )
}