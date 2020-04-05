import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailPresenter = ({ movieResults, tvResults, searchTerm, error, loading }) => null;

DetailPresenter.propTypes = {
    movieResults: PropTypes.array, 
    tvResults: PropTypes.array, 
    searchTerm: PropTypes.string, 
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired, 
}

export default DetailPresenter;