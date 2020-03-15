import React from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba( 20, 20, 20, 0.7 );
    padding: 0px 10px;
`
const Item = styled.li`
`
const TabLink = styled(Link)`
    font-size: 20px;
    font-weight: 600;
    border-bottom: 3px solid ${props => props.current ? 'red' : 'transparent'};
    padding: 15px 10px;
    margin-right: 5px;
    display: flex;
    align-self: center;
    transition: 0.5s;
`

const Header = props => {
    const { location : { pathname } } = props
    return (
    <List>
        <Item>
            <TabLink current={pathname === "/"} to="/">Home</TabLink>
        </Item>
        <Item>
            <TabLink current={pathname === "/tv"} to="/tv">TV</TabLink>
        </Item>
        <Item>
            <TabLink current={pathname === "/search"} to="/search">Search</TabLink>
        </Item>
    </List>
)}

export default withRouter( Header )