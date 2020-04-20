import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'Components/Section'
import Loader from 'Components/Loader';
import Message from 'Components/Message'

const Container = styled.div`
    padding: 0px 20px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => loading ? <Loader /> : (
    <Container>
        {topRated && topRated.length > 0 && <Section title="Now Playing" children={topRated.map(tv => <span key={tv.id}>{tv.name}</span>)}/>}
        {popular && popular.length > 0 && <Section title="Now Playing" children={popular.map(tv => <span key={tv.id}>{tv.name}</span>)}/>}
        {airingToday && airingToday.length > 0 && <Section title="Now Playing" children={airingToday.map(tv => <span key={tv.id}>{tv.name}</span>)}/>}
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