import React, { Component } from 'react'
import NewItem from './NewItem';
import Spinner from './spinner';
export default class New extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": "news24",
  //       "name": "News24"
  //     },
  //     "author": "Erika Gibson and Dawie Boonzaaier",
  //     "title": "War Games: Motshekga on thin ice, but who will take the fall?",
  //     "description": "The board of inquiry now convened by Motshekga must determine whether the navy or Iran decided to disregard Ramaphosa’s instruction.",
  //     "url": "https://www.news24.com/citypress/news/war-games-motshekga-on-thin-ice-but-who-will-take-the-fall-20260117-1355",
  //     "urlToImage": "https://news24cobalt.24.co.za/resources/029c-1e88b2c17308-e684486b443e-1000/format/inline/ramaphosa_angie_and_rudzani_20250821184700.jpeg",
  //     "publishedAt": "2026-01-17T22:35:06",
  //     "content": "\u003Cul\u003E\u003Cli\u003EShe clearly has no control over the military. It cannot go on like this.\u003C/li\u003E\u003Cli\u003EThis is one of the most serious offences in military law, warranting a summary court martial.\u003C/li\u003E\u003Cli\u003EIran non… [+7280 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-hill",
  //       "name": "The Hill"
  //     },
  //     "author": "Zach Schonfeld",
  //     "title": "Supreme Court prepares to weigh Trump’s power over Federal Reserve",
  //     "description": "President Trump’s power over the Federal Reserve will be front and center at the Supreme Court next week.   The justices on Wednesday will hear arguments on whether Trump can fire Fed Governor Lisa Cook over accusations of mortgage fraud.  Looming over it all…",
  //     "url": "https://thehill.com/regulation/court-battles/5693451-trump-federal-reserve-supreme-court/",
  //     "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2026/01/cooklisa_110325upi01_w.jpg?w=1280",
  //     "publishedAt": "2026-01-17T22:00:00Z",
  //     "content": "Skip to content\r\nPresident Trump’s power over the Federal Reserve will be front and center at the Supreme Court next week.  \r\nThe justices on Wednesday will hear arguments on whether Trump can fire F… [+6032 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bleacher-report",
  //       "name": "Bleacher Report"
  //     },
  //     "author": "David Kenyon",
  //     "title": "Unique Stats from the 2023 College Football Regular Season",
  //     "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
  //     "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
  //     "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
  //     "publishedAt": "2023-12-12T12:00:00Z",
  //     "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
  //   }
  // ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=81256b8df25d454c9a53edbc7e8da2bb&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }
  // handle both previous and next button with a single function
  handleClick = async (direction) => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=81256b8df25d454c9a53edbc7e8da2bb&page=${this.state.page + (direction === 'next' ? 1 : -1)}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState({
      page: this.state.page + (direction === 'next' ? 1 : -1),
      articles: parsedData.articles,
      loading: false
    });
  }
  render() {
    return (
      <div className='container my-1'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {this.state.articles.length === 0 && !this.state.loading && <h4>No articles to display</h4>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
          
          return <div className="col-md-3" key={element.url}>
            <NewItem title={`${element.title?.slice(0, 45)}...` ? element.title?.slice(0, 45) : "No title"} description={`${element.description?.slice(0, 88)}...` ? element.description?.slice(0, 88) : "No description"} imageUrl={element.urlToImage ? element.urlToImage : "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/258218_Sony_Bravia_8_II_TV_JHiggins_0009.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=828"} newUrl={element.url} />
          </div> 
        })}
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={() => this.handleClick('prev')}>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={() => this.handleClick('next')}>Next &rarr;</button>
        </div>

        {/* <div className="container">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=81256b8df25d454c9a53edbc7e8da2bb&page=${this.state.page - 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
              page: this.state.page - 1,
              articles: parsedData.articles
            })
          }}> &larr; Previous</button>
          <button type="button" className="btn btn-dark mx-3" onClick={async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=81256b8df25d454c9a53edbc7e8da2bb&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
              page: this.state.page + 1,
              articles: parsedData.articles
            })
          }}>Next &rarr;</button>  */}
        {/* </div> */}
        </div>
        {/* <div className="row">
          <div className="col-md-3">
            <NewItem title="Card title 1" description="Some quick example text to build on the card title and make up the bulk of the card's content." imageUrl="https://news24cobalt.24.co.za/resources/029c-1e88b2c17308-e684486b443e-1000/format/inline/ramaphosa_angie_and_rudzani_20250821184700.jpeg" newUrl='TODO' />
          </div>
        </div> */}
      </div>
    )
  }
}
