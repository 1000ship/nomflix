import React from 'react'
import SearchPresenter from './SearchPresenter'
import {movieApi, tvApi} from 'api'

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "test",
        error: null,
        loading: false,
    }

    componentDidMount () {
        this.handleSubmit()
    }

    handleSubmit = () => {
        const {searchTerm} = this.state;
        if( searchTerm !== "" )
            this.searchByTerm();
    }

    searchByTerm = async () => {
        const {searchTerm} = this.state;
        try {
            this.setState({ loading: true })
            const movieResults = await movieApi.search( searchTerm );
            const tvResults = await tvApi.search( searchTerm );
            console.log( movieResults, tvResults )
        } catch {
            this.setState({ error: "Can't search that term" })
        } finally {
            this.setState({ loading: false })
        }
    }

    render () {
        const { movieResults, tvResults, searchTerm, error, loading} = this.state;
        return (
            <SearchPresenter>
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
            </SearchPresenter>
        )
    }
}