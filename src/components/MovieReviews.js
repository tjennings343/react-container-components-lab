// Code MovieReviews Here
import React from 'react'

const Reviews = ({
    headline,
    byline,
    link,
    summary
}) => {
    return(
        <div key={headline}
        className='review'>
            <header>
                <a className='review-link' href={link.url}>
                {headline}
                </a>
                <br/>
                <span className='author'>{byline}</span>
            </header>
            <blockquote>{summary}</blockquote>
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Reviews)}</div>

MovieReviews.defaultProps ={
    reviews: []
}

export default MovieReviews