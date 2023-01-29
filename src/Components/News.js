import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
   
  const updateNews=async(pageNo)=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30)
    let parseData = await data.json();
    props.setProgress(70)
    setArticles(parseData.articles)
    setLoading(false)
    setTotalResults(parseData.totalResults)
    props.setProgress(100)
  }
  
  useEffect(() => { //instead of componentDidMount
    return () => {
      updateNews(page)
    }
  }, [])

 const fetchMoreData = async () => {
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setLoading(false)
    setTotalResults(parseData.totalResults)
  };
    return (
      <>
        <h2 align="center" style={{marginTop:'80px',marginBottom:'20px'}}>Top Headlines</h2>
        {loading && <Spinner/>} {/*Spinner Component*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {/* Removed element!this.state.loading &&{" "} */}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
          
        </InfiniteScroll>
     </>
    );
}

News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "science",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
