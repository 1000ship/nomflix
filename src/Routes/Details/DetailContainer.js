import React from 'react'
import DetailPresenter from './DetailPresenter'
import {movieApi, tvApi} from 'api'

export default class extends React.Component {

    constructor(props){
        super(props)
        const { location: { pathname } } = props;
        this.state = {
            results: null,
            error: null,
            loading: false,
            isMovie: pathname.includes( "/movie/" ),
        }
    }

    async componentDidMount(){
        const {
            match: { params: { id } },
            history: { push },
        } = this.props;
        const {isMovie} = this.props
        const parsedId = parseInt(id)
        if( isNaN(parsedId) )
            return push("/");

        let result = null;
        try {
            this.setState({ loading: true })
            if( isMovie ){
                const request = await movieApi.movieDetail( id );
                result = request.data;
            } else {
                const request = await tvApi.showDetail( id );
                result = request.data;
            }
            console.log( result )
        } catch {
            this.setState({
                error: "Can't find details"
            })
        } finally {
            this.setState({ loading: false })
        }
    }

    render () {
        const { movieResults, tvResults, searchTerm, error, loading} = this.state;
        return <DetailPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading} />
    }
}