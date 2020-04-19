import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div`
    padding-top:10px;
    &:not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 2rem;
    font-weight: 600;
    border-bottom:3px solid #FC427B;
    /* line-height:1.7; */
    &:hover{
        color: #FC427B;
        border-bottom:3px solid white;
        transition: color 0.5s linear;
    }
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    text-align:center;
    grid-gap:20px;
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propsTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default Section;