import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
    font-size:0.8rem;
    width:100%;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`;

const Image = styled.div`
    background-image:url(${props => `${props.bgUrl}`});
    width:100%;
    height:200px;
    border-radius:5px;
    background-size:cover;
    background-position:center center;
    opacity:0.4;
    transition: opacity 0.4s linear;
`;

const Rating = styled.span`
    position:absolute;
    top:3px;
    left:3px;
    opacity:0;
    color:#32ff7e;
    font-size:1rem;
    &>span{
        color:yellow;
    }
    transition:opacity 0.4s linear;
`;

const Title = styled.span`
    display:block;
    /* color:white; */
    margin-top:30px;
    margin-bottom:10px;
    color:#6D214F;
    font-size:1.5rem;
    &:hover{
        color:#ff4757;
    }
    transition:color 0.5s ease-in-out;
`;

const Year = styled.span`
    font-size:1rem;
    color:white;
    opacity:0.5;
`;

const ImageContaniner = styled.div`
    width:100%;
    position:relative;
    &:hover {
        ${Image}{
            opacity:1;
        }
        ${Rating}{
            opacity:1;
        }
        ${Title}
        {
            color:#ff4757;
        }
        ${Year}{
            opacity:1;
        }
    }
`;






const Poster = ({ id, imageUrl, title, rating, year, isMovie = false, isAdult = false }) => (
    <Link to={isMovie ? `movie/${id}` : `tv/${id}`}>
        <Container>
            <ImageContaniner >
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/time.jpg")} />
                {/* // require("../assets/time.jpg") */}
                {/* `https://image.tmdb.org/t/p/original${result.last_episode_to_air.still_path}` */}

                <Rating>
                    <span role="img" aria-label="rating">★</span>
                    {rating}/10
                </Rating>
                <Title>
                    {title && title.length > 15 ? `${title.substring(0, 15)}...` : title}
                </Title>
                <Year>
                    {/* {year && year.split("-")[0]} */}
                    {year}
                </Year>
            </ImageContaniner>
        </Container>
    </Link>
)

Poster.prototype = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
    isAdult: PropTypes.bool,
};

export default Poster;
