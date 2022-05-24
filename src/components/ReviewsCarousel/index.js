// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewNumber: 0}

  lengthOfList = null

  goToPreviousReview = () => {
    const {reviewNumber} = this.state
    if (reviewNumber > 0) {
      this.setState(prevState => ({reviewNumber: prevState.reviewNumber - 1}))
    }
  }

  goToNextReview = () => {
    const {reviewNumber} = this.state
    if (reviewNumber < this.lengthOfList - 1) {
      this.setState(prevState => ({reviewNumber: prevState.reviewNumber + 1}))
    }
  }

  render() {
    const {reviewNumber} = this.state

    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewNumber
    ]

    this.lengthOfList = reviewsList.length
    console.log(this.lengthOfList)

    return (
      <div className="main-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="arrow-review-container">
          <button
            type="button"
            testid="leftArrow"
            className="carousel-button"
            onClick={this.goToPreviousReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} className="user-profile" />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            className="carousel-button"
            onClick={this.goToNextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
