import React, { Component } from 'react'
import NewItem from './NewItem';
export default class New extends Component {
  render() {
    return (
      <div>
        This is news component
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
      </div>
    )
  }
}
