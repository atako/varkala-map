import React from 'react'
import './checkbox.css'
import { changeFilter } from '../../actions'

export default class Checkbox extends React.Component {
  
  toggleCheckbox = () => this.props.dispatch(changeFilter({ category: this.props.category, state: !this.props.appState[this.props.category] }))

  render() {
    return <div className={`cntr-${this.props.category}`}>
      <label htmlFor={`cbx-${this.props.category}`} className={`label-cbx-${this.props.category}`}>
        <input id={`cbx-${this.props.category}`} type="checkbox" className="invisible" checked={this.props.appState[this.props.category]} onClick={this.toggleCheckbox}/>
        <div className={`checkbox-${this.props.category}`}>
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
            <polyline points="4 11 8 15 16 6"></polyline>
          </svg>
        </div>
        <span></span>
      </label>
    </div>
  }
}