import React from 'react'

const NewsItem=(props)=> {

    let {title,description,imageUrl,newsUrl,date}=props;
    return (
      <div>
        <div className="card my-2"> 
          <img src={!imageUrl?'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg':imageUrl} className="card-img-top" style={{width:'100%',height:'170px'}} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className='card-text'><small className='textMuted text' style={{color:'#F4717F'}}>Published On {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem