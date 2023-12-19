import './styles/Project.css'
import {PSArray}  from './AppPhotos/PSPhotos/ps.js'
import { WHArray } from './AppPhotos/WHPhotos/wh';
import { LRArray } from './AppPhotos/LRPhoto/lr';
import { APiOSArray } from './AppPhotos/APIOSPhoto/apios';
import { useState } from 'react';

export default function Projects(){
    const [backgroundImage, setBackgroundImage] = useState(PSArray[0])
    const [whImage, setWHImage] = useState(WHArray[0])
    const [lrImage, setLRImage] = useState(LRArray[0])
    const [apImage, setAPImage] = useState(APiOSArray[0])

    function handleLeftClick(array, image, setter) {
        const index = array.findIndex(x => x === image)
        if(index === 0){
            setter(array[array.length - 1])
        }else{
            setter(array[index - 1])
        }
      }
  
      function handleRightClick(array, image, setter) {
        const index = array.findIndex(x => x === image)
        if(index < array.length - 1){
            setter(array[index + 1]) 
        }else{
            setter(array[0])
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
                        <ul className='skill-list'>
                            <li className='Project-writing'>Contributed ideas and suggestions in team meetings, actively utilizing React, JavaScript algorithms, Bootstrap, Material UI, Ruby on Rails, and serialization, and consistently delivered updates on deadlines, designs, and enhancements.</li>
                            <br/>
                            <li className='Project-writing'>Enhanced software performance by updating the way data is delivered from the Ruby on Rails backend and optimizing algorithms on the React frontend, resulting in a 40% improvement in data processing and UI load speeds. Integrated these solutions seamlessly into upcoming releases to ensure sustained optimization.</li>
                            <br/>
                            <li className='Project-writing'>Spearheaded the transition from the Excel program to a new website, leveraging a React frontend with Material UI, Bootstrap, and CSS for design, supported by a robust Ruby on Rails backend and a PostgreSQL database. This initiative resulted in improved training methods and an exceptional 80% reduction in errors.</li>
                            <br/>
                        </ul>
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
                        <li className="Project-item">SCRUM</li>
                    </ul>
                    <h3 className='Project-title'>Photo <div style={{display: '-webkit-box'}}><button
                        className="leftArrowButton"
                        onClick={() => handleLeftClick(PSArray, backgroundImage, setBackgroundImage)}
                        >
                        <img
                            className="leftArrow"
                            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                            alt="Left Arrow"
                        />
                        </button>
                        <button
                        className="rightArrowButton"
                        onClick={() => handleRightClick(PSArray, backgroundImage, setBackgroundImage)}
                        >
                        <img
                            className="rightArrow"
                            src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                            alt="Right Arrow"
                        /> </button></div></h3>
                    <div
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                        className="houseImageBackground"
                    >  
                    </div> 
                </div>
            </div>
            <div className="Project-div">
                <h2 className='Project-title'>Water Heifers Unlimited</h2>
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
                    <h3 className='Project-title'>Photo <div style={{display: '-webkit-box'}}><button
                        className="leftArrowButton"
                        onClick={() => handleLeftClick(WHArray, whImage, setWHImage)}
                        >
                        <img
                            className="leftArrow"
                            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                            alt="Left Arrow"
                        />
                        </button>
                        <button
                        className="rightArrowButton"
                        onClick={() => handleRightClick(WHArray, whImage, setWHImage)}
                        >
                        <img
                            className="rightArrow"
                            src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                            alt="Right Arrow"
                        /> </button></div></h3>
                    <div
                        style={{ backgroundImage: `url(${whImage})` }}
                        className="houseImageBackground"
                    >
                    </div> 
                </div>
            </div>
            <div className="Project-div">
                <h2 className='Project-title'>Luxury Realtors</h2>
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
                    <h3 className='Project-title'>Photo <div style={{display: '-webkit-box'}}>    <button
                        className="leftArrowButton"
                        onClick={() => handleLeftClick(LRArray, lrImage, setLRImage)}
                        >
                        <img
                            className="leftArrow"
                            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                            alt="Left Arrow"
                        />
                        </button>
                        <button
                        className="rightArrowButton"
                        onClick={() => handleRightClick(LRArray, lrImage, setLRImage)}
                        >
                        <img
                            className="rightArrow"
                            src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                            alt="Right Arrow"
                        /> </button>
                    </div>  </h3>
                    <div
                        style={{ backgroundImage: `url(${lrImage})` }}
                        className="houseImageBackground"
                    >
                    </div> 
                </div>
            </div>
            <h1 className='Info-title'>iOS Applications</h1>
            <div className="Project-div">
                <h2 className='Project-title'>Water Heifers Unlimited</h2>
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
                    <h3 className='Project-title'>Photo    <div style={{display: '-webkit-box'}}> <button
                        className="leftArrowButton"
                        onClick={() => handleLeftClick(APiOSArray, apImage, setAPImage)}
                        >
                        <img
                            className="leftArrow"
                            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                            alt="Left Arrow"
                        />
                        </button>
                        <button
                        className="rightArrowButton"
                        onClick={() => handleRightClick(APiOSArray, apImage, setAPImage)}
                        >
                        <img
                            className="rightArrow"
                            src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                            alt="Right Arrow"
                        /> </button> </div></h3>
                    <div
                        style={{ backgroundImage: `url(${apImage})` }}
                        className="houseImageBackground"
                    >
                    </div> 
                </div>
                <br/>
            </div>
        </>
    )
}