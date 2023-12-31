import './styles/home.css'
import Portrait from "./AppPhotos/MyPhoto.png"

export default function Home(){
    return(
        <>
            <div className="Home-logo">
                <h1 className="title">Motivated Software Engineer</h1>
            </div>
            <br/>
            <h1 className='Info-title'>Get To Know Me</h1>
            <div className='Home-information'>
                <div className='Home-writing'>
                    <p>Enthusiastic software developer, who thrives on unraveling intricate problems, doing so diligently and tenaciously. Excited to surpass ambitious development goals, even when time is limited, while consistently delivering excellent code quality. Skilled at explaining intricate technical concepts to beginners, ensuring easy understanding and increased user engagement. Eager to grow, with a receptive attitude towards acquiring new knowledge and experiences.</p>
                </div>
                <div className="Portrait-image" style={{backgroundImage: `url(${Portrait})`}}></div>
            </div>
            <h1 className='Info-title'>Hobbies</h1>
            <ul className="skill-list">
                <li className="skill-item">Escape Rooms</li>
                <li className="skill-item">Group Strategy Boardgames</li>
                <li className="skill-item">Pickleball</li>
                <li className="skill-item">Reading</li>
                <li className="skill-item">Archery</li>
                <li className="skill-item">Hiking</li>
                <li className="skill-item">Lego Building</li>
                <li className='skill-item'>Traveling With My Wife</li>
            </ul>
        </>
    )
}