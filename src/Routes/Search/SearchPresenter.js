import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'Components/Loader'
import Section from 'Components/Section'
import Message from 'Components/Message'
import Poster from 'Components/Poster'
import { Helmet } from 'react-helmet'

const Container = styled.div`
    padding: 20px 20px;
`

const Form = styled.form`
    margin-bottom: 50px;
`

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`

const SearchPresenter = ( {movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (
    <Container>
        <Helmet>
            <title>Search | Nomflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? <Loader /> : <>
            {movieResults && movieResults.length > 0 &&
                <Section title="Movie Results">
                    {movieResults.map( movie =>
                            <Poster
                            key={movie.id} id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date.substr(0,4)}
                            isMovie={true}
                        ></Poster>
                    )}
                </Section>
            }
            {tvResults && tvResults.length > 0 &&
                <Section title="TV Show Results">
                    {tvResults.map( tv =>
                        <Poster
                            key={tv.id} id={tv.id}
                            title={tv.original_name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={ tv.first_air_date && tv.first_air_date.length >= 4 ? tv.first_air_date.substr(0,4) : '' }
                            isMovie={false}
                        ></Poster>
                    )}
                </Section>
            }
        </>}
        {error && <Message text={error} color="#e74c3c"></Message>}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && 
            <Message text={`Nothing found for : ${searchTerm}`} color="#95a5a6"></Message>
        }
    </Container>

);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;