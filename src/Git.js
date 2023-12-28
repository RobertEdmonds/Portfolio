import './styles/Git.css'
import { GitArray } from './AppPhotos/GitPhotos/Git'

export default function Git(){

    return(
        <>
        <ul className="git-list" style={{display: "table-cell"}}>
            <h1 className='Info-title' style={{display: "inline"}}>Certificates</h1>
            <li className="git-item" style={{marginTop: "1rem"}}>Flatirons Software Bootcamp</li>
            <li className="git-item">Mosh Python Bootcamp</li>
            <li className="git-item">SVAcademy Sales Development</li>
            <li className="git-item">HealthOne EMS</li>
        </ul>
        <ul className="git-list" style={{display: "table-cell"}}>
            <h1 className='Info-title' style={{display: "inline"}}>GitHub</h1>
            <li className="git-item" style={{marginTop: "1rem"}}><a href="https://github.com/RobertEdmonds?tab=overview&from=2023-12-01&to=2023-12-20" className='git-links'>GitHub Account</a></li>
            <li className="git-item">+250 GitHub Repositories</li>
            <li className="git-item">+500 GitHub Contributions</li>
        </ul>
        <ul className='learn-list' style={{display: "table-cell"}}>
            <h1 className='Info-title'>Continued Learning</h1>
            <li className='learn-item' style={{marginTop: "1rem"}}>DevOps Days 2023</li>
            <li className='learn-item'>Tampa Bay Python</li>
            <li className='learn-item'>Pinellas Tech Network</li>
            <li className='learn-item'>Tech On Tap</li>
            <li className='learn-item'>Tampa Bay AWS User Group</li>
            <li className='learn-item'>Tampa Bay Techies</li>
            <li className='learn-item'>High Tech Connect</li>
            <li className='learn-item'>Tampa Bay Generative AI</li>
            <li className='learn-item'>Tech Success Network</li>
            <li className='learn-item'>Tampa Devs</li>
            <li className='learn-item'>Varsity Tutors</li>
            <li className='learn-item'>O'Reilly books</li>
        </ul>
        <div>
            {GitArray.map(photo => {
                return(
                    <div
                        style={{ backgroundImage: `url(${photo})` }}
                        className="houseImageBackground"
                    >  
                    </div> 
                )
            })}
        </div>
        </>
    )
}