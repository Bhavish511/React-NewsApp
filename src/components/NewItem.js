import React, { Component } from 'react'
export default class NewItem extends Component {
  // constructor(props) {
  //   super(props);
  // };
  render() {
    let {title, description, imageUrl,newUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
          <div className="card">
            <span className='position-absolute top-0 translate-middle badge rounded-pill bg-success' style={{left: '85%', zIndex:'1'}}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
              <a href={newUrl} target='_blank' className="btn btn-dark" rel="noreferrer">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
