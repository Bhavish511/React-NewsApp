import React, { useEffect, useState } from 'react'
import NewItem from './NewItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
const New = (props) => {
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
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  
    const UpdateNews = async () => {
      props.setprogress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setprogress(30);
      let parsedData = await data.json();
      props.setprogress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setprogress(100);
    }
    useEffect(() => {
      document.title = `NewsMonkey - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
      UpdateNews();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + (direction === 'next' ? 1 : -1)}&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   props.setprogress(30);
  //   let parsedData = await data.json(); 
  //   props.setprogress(70);
  //   setPage(page + (direction === 'next' ? 1 : -1));
  //   setArticles(parsedData.articles);
  //   setLoading(false);
  //   props.setprogress(100);
  // }
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page + 1);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0', marginTop: '90px'}}>NewsMonkey - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
        {/* {loading && <Spinner />} */}
          {/* {articles.length === 0 && !loading && <h4>No articles to display</h4>}
          <div className="row">
            {!loading && articles.map((element) => {
            
            return <div className="col-md-3" key={element.url}>
              <NewItem title={`${element.title?.slice(0, 45)}...` ? element.title?.slice(0, 45) : "No title"} description={`${element.description?.slice(0, 88)}...` ? element.description?.slice(0, 88) : "No description"} 
              imageUrl={element.urlToImage ? element.urlToImage : "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/258218_Sony_Bravia_8_II_TV_JHiggins_0009.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=828"} newUrl={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name} />
            </div> 
          })} */}
        {articles.length === 0 && !loading && <h4>No articles to display</h4>}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          // loader={<Spinner />}
          loader={totalResults !== articles.length && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <NewItem title={`${element.title?.slice(0, 45)}...` ? element.title?.slice(0, 45) : "No title"} description={`${element.description?.slice(0, 88)}...` ? element.description?.slice(0, 88) : "No description"} 
                imageUrl={element.urlToImage ? element.urlToImage : "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/258218_Sony_Bravia_8_II_TV_JHiggins_0009.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=828"} newUrl={element.url}
                author={element.author} date={element.publishedAt} source={element.source.name} />
              </div> 
            })}
            </div>
            </div>
            </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button disabled={page <=1} type="button" className="btn btn-dark" onClick={() => handleClick('prev')}>&larr; Previous</button>
          <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={() => handleClick('next')}>Next &rarr;</button>
        </div> */}

        {/* <div className="container">
          <button disabled={page <=1} type="button" className="btn btn-dark" onClick={async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setTotalResults(parsedData.totalResults);
            setArticles(parsedData.articles);
          }}> &larr; Previous</button>
          <button type="button" className="btn btn-dark mx-3" onClick={async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            })
          }}>Next &rarr;</button>  */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="row">
          <div className="col-md-3">
            <NewItem title="Card title 1" description="Some quick example text to build on the card title and make up the bulk of the card's content." imageUrl="https://news24cobalt.24.co.za/resources/029c-1e88b2c17308-e684486b443e-1000/format/inline/ramaphosa_angie_and_rudzani_20250821184700.jpeg" newUrl='TODO' />
          </div>
        </div> */}
      </>
    )
}

export default New;

New.defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general',
    author: 'Unknown',
    date: new Date().toISOString().slice(0, 10),
};
New.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
};