import { Component } from "react";
import '../Css/Body.css'


class QuoteGen extends Component {
    render(){
        
        const apiHandler = () => {
            //GET YOUR KEY HERE: https://humorapi.com/console/#Dashboard
            let key = 'YOUR_KEY'
            let url = `https://api.humorapi.com/jokes/random?api-key=${key}`
            let insertInto = document.getElementById('resultField')

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let path = data['joke']
                    let p1 = document.createElement('p')
                    p1.innerHTML = path
                    insertInto.appendChild(p1)
                })
        }

        return(
            <main>
                <h1>Jokes Generator</h1>
                <button onClick={() => apiHandler()} className="btn btn-dark w-50 mt-3 mb-3" type="button">Generate</button>
                <div id="resultField"></div>
            </main>
        )
    }
}

export default QuoteGen