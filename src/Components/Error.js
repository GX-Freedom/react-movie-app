import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contailner = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    align-items:flex-end;
    justify-content:center;

`;

const Text = styled.span`
    color:#e84118;
    font-weight:600;
    font-size:3rem;
    animation: colors 4s linear infinite;

    @keyframes colors{
        0%{
            color:#A3CB38;
        }
        30%{
            color:#EA2027;
        }
        60%{
            color:#0652DD;
        }
        100%{
            color:#A3CB38;
        }
    }
`;
const Error = ({ text }) => (
    <Contailner>
        <Text>{text}</Text>
    </Contailner>
)

Error.protoType = {
    text: PropTypes.string.isRequired
};
export default Error;