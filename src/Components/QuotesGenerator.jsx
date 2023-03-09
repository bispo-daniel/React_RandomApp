import { Component } from "react";
import '../Css/Body.css'

class QuoteGen extends Component {
    render(){
        const quoteGenerator = () => {
            let insertInto = document.getElementById('resultField')
            let url = 'https://api.quotable.io/random'

            let values = ['author', 'content']

            let p1 = document.createElement('p')

            fetch(url)
                .then(data => data.json())
                .then(res => {
                    let author = `${res[values[0]]}: `.toUpperCase()
                    p1.innerHTML += author

                    let quote = `${res[values[1]]}`
                    p1.innerHTML += quote

                    insertInto.appendChild(p1)
                })
        }

        return(
            <main>
                <h1>Quotes Generator</h1>
                <button onClick={() => quoteGenerator()}className="btn btn-dark w-50 mt-3 mb-3" type="button">Generate</button>
                <div id="resultField"></div>
            </main>
        )
    }
}

export default QuoteGen