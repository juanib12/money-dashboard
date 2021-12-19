import { useEffect, useState } from "react"
import axios from 'axios'

const NewsFeed = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
                'x-rapidapi-key': '38b4de00aemsha068d0b2c590447p1e6e04jsn8a70b83096b2'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setArticles(response.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])


    console.log(articles)

    const first7articles = articles?.slice(0,7)

    return (
        <div className="news-feed">
            <h2>Noticias</h2>
            {first7articles?.map((article, _index) => (
            <div key={_index}>
                <a href={article.url}><p>{article.title}</p></a>
            </div>))}
        </div>
    )
}

export default NewsFeed