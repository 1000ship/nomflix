import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 40px;
`;

const Loader = () => <Container>
    <Helmet>
        <title>⏱Loading... | Nomflix</title>
    </Helmet>
    <span role="img" aria-label="Loading">⏱ Now Loading...</span>
</Container>

export default Loader;