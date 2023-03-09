import { Component } from "react";
import reactLogo from '../Images/logo.svg'
import linkedinLogo from '../Images/linkedin.svg'
import githubLogo from '../Images/github.svg'
import '../Css/Header.css'

class Header extends Component {
    render(){
        return(
            <header>
                <img src={reactLogo} alt="" className="reactLogo"/>

                <div className="dropdown-center">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Choose Action
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="QuotesGenerator">Quotes Generator</a></li>
                        <li><a className="dropdown-item" href="ActivitiesGenerator">Activities Generator</a></li>
                        <li><a className="dropdown-item" href="RobotsGenerator">Robots Generator</a></li>
                        <li><a className="dropdown-item" href="JokesGenerator">Jokes Generator</a></li>
                    </ul>
                </div>                

                <div className="socialWrap">
                    <a href="https://linkedin.com/in/bispo-daniel" target='_blank' rel="noreferrer" ><img src={linkedinLogo} alt="" /></a>
                    <a href="https://github.com/bispo-daniel" target='_blank' rel="noreferrer" ><img src={githubLogo} alt="" /></a>
                </div>
            </header>
        )
    }
}

export default Header