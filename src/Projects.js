import './styles/Project.css'
import {PSArray}  from './AppPhotos/PSPhotos/ps.js'
import { WHArray } from './AppPhotos/WHPhotos/wh';
import { LRArray } from './AppPhotos/LRPhoto/lr';
import { APiOSArray } from './AppPhotos/APIOSPhoto/apios';
import { FILArray } from './AppPhotos/FILPhotos/fil';
import { useState } from 'react';

export default function Projects(){
    const [backgroundImage, setBackgroundImage] = useState(PSArray[0])
    const [whImage, setWHImage] = useState(WHArray[0])
    const [lrImage, setLRImage] = useState(LRArray[0])
    const [apImage, setAPImage] = useState(APiOSArray[0])
    const [filImage, setFILImage] = useState(FILArray[0])

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
                <h2 className='Project-title'>Fisher Island Lemonade</h2>
                <div className='Project-div'>
                    <h3 className='Project-title'>Description</h3>
                    <div className='Project-div'>
                        <p className='Project-writing'>
                            I worked closely with the design team at Fisher Island Lemonade. We utilized the SCRUM method during the crucial webpage updates. They wanted a new look and new pages.  
                        </p>
                        <ul className='skill-list'>
                            <li className='Project-writing'>Updated old code bases to modern development standards using PHP and CSS, resulting in substantial improvements in functionality and design, showcasing my ability to work with existing code and enhance its performance and aesthetics.</li>
                            <br/>
                            <li className='Project-writing'>Participated in software field testing, utilizing WordPress, to verify the performance of developed projects.</li>
                            <br/>
                            <li className='Project-writing'>Collaborated on various stages of the systems development lifecycle, from requirement gathering to production releases, while actively using PHP, CSS, and updating WordPress to ensure project success.</li>
                            <br/>
                        </ul>
                    </div>
                    <h3 className='Project-title'>Programs</h3>
                    <ul className="skill-list">
                        <li className="Project-item">Linux</li>
                        <li className="Project-item">PHP</li>
                        <li className="Project-item">CSS</li>
                        <li className="Project-item">WordPress</li>
                    </ul>
                    <h3 className='Project-title'>Photo <div style={{display: '-webkit-box'}}><button
                        className="leftArrowButton"
                        onClick={() => handleLeftClick(FILArray, filImage, setFILImage)}
                        >
                        <img
                            className="leftArrow"
                            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                            alt="Left Arrow"
                        />
                        </button>
                        <button
                        className="rightArrowButton"
                        onClick={() => handleRightClick(FILArray, filImage, setFILImage)}
                        >
                        <img
                            className="rightArrow"
                            src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                            alt="Right Arrow"
                        /> </button></div></h3>
                    <div
                        style={{ backgroundImage: `url(${filImage})` }}
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
                        This website is for anglers(fishermen) to be able to schedule a guided fishing trip in Alaska. The user can look through all the images in the gallery. The user can look up trips and filter it out by the month they would like to travel. There is also a donation portion to donate money to a non-profit. The user also can create a blog, to start a conversation. Once a employee is logged in then forms open up to add trips, update trips, delete trips, create companies to donate money too. Can also manage blogs and add photo's to the gallery.
                        </p>
                        <ul className='skill-list'>
                            <li className='Project-writing'>Developed a user-friendly scheduling feature in the angler's website using React, Redux, and Ruby on Rails, enabling users to seamlessly browse and book guided fishing trips in Alaska. Implemented a dynamic filtering system allowing users to search and filter trips by their preferred travel month.</li>
                            <li className='Project-writing'>Designed and integrated a visually appealing gallery using React and MaterialUI, allowing users to explore and view a comprehensive collection of images related to fishing trips. Leveraged Cloudinary for efficient image management, ensuring optimal performance and user experience.</li>
                            <li className='Project-writing'>Implemented an interactive blog creation feature with React, Redux, and Ruby on Rails, enabling users to initiate and engage in fishing-related conversations. Additionally, developed a secure employee portal with form functionalities to manage trips, update trip details, delete trips, create donation recipient companies, and administer blogs. Utilized CSS for seamless styling, ensuring a cohesive and intuitive user interface.</li>
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
                        <li className="Project-item">MaterialUI</li>
                        <li className="Project-item">CSS</li>
                        <li className="Project-item">React</li>
                        <li className="Project-item">React Router Dom</li>
                        <li className="Project-item">Redux</li>
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
                        This is an app for realtors to display the bear minimum for people that are not signed in. Once someone signs up the realtor is able to view the customer and have their contact information. If the realtor is logged in, they are able to update, add, and delete houses. The realtor is also able to add, update order and delete photos. Realtor can also get their profile and update any changes. A realtor that has access to the webpage are the only ones that can add another realtor to make updates or changes to the webpage. Once someone becomes a customer, they are able to update their profile, and view houses with full description.
                        </p>
                        <ul className='skill-list'>
                            <li className='Project-writing'>Developed a secure and user-friendly real estate application using React, useContext, and Ruby on Rails, allowing realtors to showcase essential property details for non-registered users. Implemented a seamless sign-up process, enabling realtors to access customer information and contact details upon user registration.</li>
                            <li className='Project-writing'>Created a comprehensive realtor dashboard with functionalities in React, Ruby on Rails, and Serializer, empowering logged-in realtors to manage properties by updating, adding, and deleting houses. Implemented a photo management system, allowing realtors to add, update, and delete property photos, enhancing the overall presentation of listed houses. Utilized CSS for consistent and visually appealing styling across the application.</li>
                            <li className='Project-writing'>Implemented a robust authentication system in Ruby on Rails, restricting access to the webpage solely to authorized realtors. Integrated Linux and SQLite for efficient database management, ensuring data security and reliability. Utilized VSCode for streamlined development and collaboration. Designed a role-based access control system, allowing authorized realtors to add and manage additional realtors, facilitating collaborative updates and changes to the webpage.</li>
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
                        <li className="Project-item">CSS</li>
                        <li className="Project-item">React</li>
                        <li className="Project-item">UseContext</li>
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
                            The iOS app for AquaProp. It has the capabilities to scan QRCodes that match a specific job site and adds the new inventory to the job site. This was to help the on-site engineers update the inventory quickly and minimize human error. It also displays all the sites inventory to keep track on the go.
                        </p>
                        <ul className='skill-list'>
                            <li className='Project-writing'>Developed and launched an iOS app using React Native for Aqua Prop, enabling real-time inventory tracking and seamless addition of new items through QR-code scanning, following Agile methodology for rapid and efficient development.</li>
                        </ul>
                    </div>
                    <h3 className='Project-title'>Programs</h3>
                    <ul className="skill-list">
                        <li className="Project-item">Linux</li>
                        <li className="Project-item">Postgres</li>
                        <li className="Project-item">Ruby on Rails</li>
                        <li className="Project-item">Serializer</li>
                        <li className="Project-item">Bcrypt</li>
                        <li className="Project-item">Bootstrap</li>
                        <li className="Project-item">CSS</li>
                        <li className="Project-item">ReactNative</li>
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