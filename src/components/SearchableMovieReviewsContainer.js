import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearch = event => 
    this.setState({ search: event.target.value })

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.search))
        .then(response => response.json())
        .then(response => this.setState({reviews: response.results}))
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search-input'>Search Movies</label>
                    <input id='search-input' type='text' style={{width:300}} onChange={this.handleSearch}/>
                    <button type='submit'>Search</button>
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer