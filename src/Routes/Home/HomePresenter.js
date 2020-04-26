import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'Components/Section'
import Loader from 'Components/Loader';
import Message from 'Components/Message'
import Poster from 'Components/Poster'
import { Helmet } from 'react-helmet'

const Container = styled.div`
    padding: 20px 20px;
`;


const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => loading ? <Loader /> : (
    <Container>
        <Helmet>
            <title>Movies | Nomflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 &&
            <Section title="Now Playing" children={
                nowPlaying.map(movie =>
                    <Poster
                        key={movie.id} id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        year={movie.release_date.substr(0,4)}
                        isMovie={true}
                    ></Poster>
                )}
            />
        }
        {upcoming && upcoming.length > 0 &&
            <Section title="Upcoming" children={
                upcoming.map(movie =>
                    <Poster 
                        key={movie.id} id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        year={movie.release_date.substr(0,4)}
                        isMovie={true}
                    ></Poster>
                )}
            />
        }
        {popular && popular.length > 0 &&
            <Section title="Popular" children={
                popular.map(movie => 
                    <Poster
                        key={movie.id} id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        year={movie.release_date.substr(0,4)}
                        isMovie={true}
                    ></Poster>
                )}
            />
        }
        {error && <Message text={error} color="#e74c3c"></Message>}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array, 
    upcoming: PropTypes.array, 
    popular: PropTypes.array, 
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired, 
}

export default HomePresenter;