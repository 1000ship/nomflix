import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'Components/Section'

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => loading ? null : (
    <Container>
        {topRated && topRated.length > 0 && <Section title="Now Playing" children={topRated.map(tv => tv.name)}/>}
        {popular && popular.length > 0 && <Section title="Now Playing" children={popular.map(tv => tv.name)}/>}
        {airingToday && airingToday.length > 0 && <Section title="Now Playing" children={airingToday.map(tv => tv.name)}/>}
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