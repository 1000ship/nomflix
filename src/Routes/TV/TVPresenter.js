import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'Components/Section'
import Loader from 'Components/Loader';
import Message from 'Components/Message'
import Poster from 'Components/Poster'

const Container = styled.div`
    padding: 0px 20px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => loading ? <Loader /> : (
    <Container>
        {topRated && topRated.length > 0 && 
            <Section title="Now Playing" children={
                topRated.map(tv => 
                    <Poster
                        key={tv.id} id={tv.id}
                        title={tv.original_name}
                        imageUrl={tv.poster_path}
                        rating={tv.vote_average}
                        year={tv.first_air_date.substr(0,4)}
                        isMovie={false}
                    ></Poster>
                )}
            />
        }
        {popular && popular.length > 0 && 
            <Section title="Now Playing" children={
                popular.map(tv => 
                    <Poster
                        key={tv.id} id={tv.id}
                        title={tv.original_name}
                        imageUrl={tv.poster_path}
                        rating={tv.vote_average}
                        year={tv.first_air_date.substr(0,4)}
                        isMovie={false}
                    ></Poster>
                )}
            />
        }
        {airingToday && airingToday.length > 0 && 
            <Section title="Now Playing" children={
                airingToday.map(tv => 
                    <Poster
                        key={tv.id} id={tv.id}
                        title={tv.original_name}
                        imageUrl={tv.poster_path}
                        rating={tv.vote_average}
                        year={tv.first_air_date.substr(0,4)}
                        isMovie={false}
                    ></Poster>
                )}
            />
        }
        {error && <Message text={error} color="#e74c3c"></Message>}
    </Container>
);

TVPresenter.propTypes = {
    topRated: PropTypes.array, 
    popular: PropTypes.array, 
    airingToday: PropTypes.array, 
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired, 
}

export default TVPresenter;