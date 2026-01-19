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
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newUrl} target='_blank' className="btn btn-dark" rel="noreferrer">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
