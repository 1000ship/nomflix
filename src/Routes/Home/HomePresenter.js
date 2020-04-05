import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'Components/Section'

const Container = styled.div`
    padding: 0px 10px;
`;


const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => loading ? null : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing" children={nowPlaying.map(movie => movie.title)}/>}
        {upcoming && upcoming.length > 0 && <Section title="Now Playing" children={upcoming.map(movie => movie.title)}/>}
        {popular && popular.length > 0 && <Section title="Now Playing" children={popular.map(movie => movie.title)}/>}
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