import React from 'react'
import './loader.css'

export default class Loader extends React.Component {
  render() {
    return <div className='loader'>
      Loading...
        <div className="ball-clip-rotate">
        <div></div>
      </div>
    </div>
  }
}