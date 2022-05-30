import React, { Component } from 'react'
import Newsitems from './NewsItems'

export class News extends Component {

  

  constructor() {
    super();
    console.log("Hello I am an constructor from News component");
    this.state = {
      articles: [],
      loading: false


    }
  }

  async componentDidMount() {
    console.log("cdm")

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=15729f99e4b740c383d101bc5242f2e2"
    let data =  await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})

  }


  render() {
    return (
      <div className="container my-3">
        <h2>NewsGeek - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4">
              <Newsitems key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}



        </div>



      </div>
    )
  }
}

export default News
