import { Component } from "react";
import '../Css/Body.css'

class ActivityGen extends Component {
    render(){
        const activityGenerator = () => {
            let insertInto = document.getElementById('resultField')
            let url = 'https://www.boredapi.com/api/activity'

            fetch(url)
                .then(data => data.json())
                .then(res => {
                    console.log(res);
                    let path = res['activity']
                    let p1 = document.createElement('p')
                    p1.innerHTML = `${path}`
                    insertInto.appendChild(p1)
                })
        }

        return(
            <main className='actGen'>
                <h1>Are you bored?</h1>
                <button onClick={() => activityGenerator()}className="btn btn-dark w-50 mt-3 mb-3" type="button">Generate activity</button>
                <div id="resultField"></div>
            </main>
        )
    }
}

export default ActivityGen