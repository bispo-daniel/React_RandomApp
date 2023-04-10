import { Component } from "react";
import '../Css/Body.css'
import Trigger from '../Trigger'

class RobotGen extends Component {
    render(){
        const robotGenerator = () => {
            let insertInto = document.getElementById('resultFieldRobots')

            let inputValue = document.getElementsByClassName('form-control')[0].value
            let url = `https://robohash.org/${inputValue}`

            Trigger("Robot generator")

            let img = document.createElement('img')
            img.style.marginBottom = '5px'
            img.src = url

            insertInto.appendChild(img)
        }

        const enterDown = (e) => {
            let key = e.key || e.code
            if(key === 'Enter'){
                robotGenerator()
            }
        }

        return(
            <main onKeyUp={(e) => enterDown(e)}>
                <h1>Robots Generator</h1>

                <div className="input-group mb-3 mt-3 w-75">
                    <input type="text" className="form-control" placeholder="Type your Robot's name..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                </div>
            
                <div id="resultFieldRobots"></div>
            </main>
        )
    }
}

export default RobotGen