import './styles/Git.css'

export default function Git(){
    return(
        <>
        <ul className="git-list">
            <h1 className='Info-title' style={{display: "inline"}}>GitHub</h1>
            <li className="git-item" style={{marginTop: "1rem"}}><a href="https://github.com/RobertEdmonds?tab=overview&from=2023-12-01&to=2023-12-20" className='git-links'>GitHub Account</a></li>
            <li className="git-item">+250 GitHub Repositories</li>
            <li className="git-item">+500 GitHub Contributions</li>
        </ul>
        <ul className='learn-list'>
            <h1 className='Info-title' style={{display: "inline"}}>Continued Learning</h1>
            <li className='learn-item' style={{marginTop: "1rem"}}>DevOps Days 2023</li>
            <li className='learn-item'></li>
            <li className='learn-item'></li>
            <li className='learn-item'></li>
            <li className='learn-item'></li>
            <li className='learn-item'></li>
            <li className='learn-item'></li>
            <li className='learn-item'></li>
        </ul>
        </>
    )
}