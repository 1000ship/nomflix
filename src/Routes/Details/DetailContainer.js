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
            loading: true,
            isMovie: pathname.includes( "/movie/" ),
        }
    }

    async componentDidMount(){
        const {
            match: { params: { id } },
            history: { push },
        } = this.props;
        const { isMovie } = this.state
        const parsedId = parseInt(id)
        if( isNaN(parsedId) )
            return push("/");

        let results = null;
        try {
            this.setState({ loading: true })
            if( isMovie ){
                const request = await movieApi.movieDetail( id );
                results = request.data;
            } else {
                const request = await tvApi.showDetail( id );
                results = request.data;
            }
            this.setState({results})
        } catch(e) {
            this.setState({
                error: "Can't find details"
            })
        } finally {
            this.setState({ loading: false })
        }
    }

    render () {
        const { results, error, loading } = this.state;
        return <DetailPresenter
                results={results}
                error={error}
                loading={loading} />
    }
}