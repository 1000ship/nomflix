import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'Components/Loader'
import Message from 'Components/Message'
import { Helmet } from 'react-helmet'

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 150px);
    position: relative;
    padding: 50px;
`

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage ? `https://image.tmdb.org/t/p/original/${props.bgImage}` : ``});
    background-size: cover;
    background-position: center center;
    filter: blur(3px);
    opacity: 0.5;
    z-index: -1;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
`

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage ? `https://image.tmdb.org/t/p/original/${props.bgImage}` : ``});
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
    position: relative;
`

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`

const Title = styled.span`
    font-size: 32px;
    margin-bottom: 10px;
`

const ItemContainer = styled.div`
    margin: 20px 0px;
`

const Item = styled.span``

const Divider = styled.span`
    margin: 0px 10px;
`

const Overview = styled.p`
    line-height: 1.5;
    font-size: 15px;
    opacity: 0.8;
    width: 80%;
`


const DetailPresenter = ({ results, loading, error }) => loading ? (<Loader/>) : (
    <Container>
        <Helmet>
            <title>{results.title ? results.title : results.name} | Nomflix</title>
        </Helmet>

        <Backdrop bgImage={results.backdrop_path}/>
        <Content>
            <Cover bgImage={results.backdrop_path}/>
            <Data>
                <Title>{results.title ? results.title : results.name }</Title>
                <ItemContainer>
                    <Item>{results.release_date ? results.release_date.substring(0.4) : results.first_air_date.substring(0,4)}</Item>
                    <Divider>·</Divider>
                    <Item>{results.runtime ? results.runtime : results.episode_run_time[0] } mins</Item>
                    <Divider>·</Divider>
                    <Item>{results.genres ? results.genres.map( (g,i) => i !== results.genres.length - 1 ? `${g.name} / ` : g.name) : "" }</Item>
                </ItemContainer>
                <Overview>{results.overview}</Overview>
            </Data>
        </Content>
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