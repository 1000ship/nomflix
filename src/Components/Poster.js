import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    font-size: 12px;

    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
    }
`

const ImageContainer = styled.div`
    margin-bottom: 5px;
`

const Image = styled.div`
    background-image: url(${props => props.bgUrl ? `https://image.tmdb.org/t/p/w300/${props.bgUrl}` : ``});
    background-size: cover;
    height: 200px;
    border-radius: 4px;
    background-position: center center;
    margin-bottom: 3px;
`

const Rating = styled.span`
    display: block;
`

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
    font-weight: 600;
`

const Year = styled.span`
    font-size: 10px;
    color: rgba(255,255,255,0.5);
`


const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}` }>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl}></Image>
                <Rating>
                    <span role='img' aria-label='rating'>
                         ⭐️
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
        </Container>
    </Link>
)

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;