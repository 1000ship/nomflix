import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'Components/Loader'
import Message from 'Components/Message'

const Container = styled.div`
    height: calc(100vw - 50px);
    width: 100%;
    position: absolute;
`

const Backdrop = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage ? `https://image.tmdb.org/t/p/original/${props.bgImage}` : ``});
`

const DetailPresenter = ({ results, loading, error }) => (
    <Container>
        {loading ? <Loader/> :
            // <Backdrop bgImage={results.backdrop_path}/>
        }
    </Container>
)

DetailPresenter.propTypes = {
    movieResults: PropTypes.array, 
    tvResults: PropTypes.array, 
    searchTerm: PropTypes.string, 
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired, 
}

export default DetailPresenter;