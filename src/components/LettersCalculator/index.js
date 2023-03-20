import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onCount = event => {
    const newText = event.target.value

    this.setState({input: newText})
  }

  render() {
    const {input} = this.state
    const count = input.length
    return (
      <div className="bg">
        <div className="content">
          <div className="text-part">
            <h1 className="head">Calculate the Letters you enter</h1>
            <label htmlFor="searchId" className="para">
              Enter the phrase
            </label>
            <input
              id="searchId"
              className="search-inp"
              placeholder="Enter the phrase"
              type="text"
              onChange={this.onCount}
            />
            <p className="btn">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="pic"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
