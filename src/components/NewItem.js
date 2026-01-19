import React, { Component } from 'react'
export default class NewItem extends Component {
  // constructor(props) {
  //   super(props);
  // };
  render() {
    let {title, description, imageUrl,newUrl} = this.props;
    return (
      <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 45)}...</h5>
              <p className="card-text">{description.slice(0, 88)}...</p>
              <a href={newUrl} target='_blank' className="btn btn-primary" rel="noreferrer">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
