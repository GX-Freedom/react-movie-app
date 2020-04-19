import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Section from "Components/Section";
// import { Link } from "react-router-dom";
import Error from "Components/Error";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";



const Container = styled.div`
  padding: 0px 20px;

`;

const Form = styled.form`
    margin-bottom:50px;
 `;

const Input = styled.input`
    all:unset;
    font-size:1.5rem;
    color:#1B9CFC;
    width:100%;
    height:2rem;
    border-bottom:1px solid #6D214F;
    box-shadow: 0px 2.5px 5px 0px rgba(0,0,0,0.75);
 `;

// const Links = styled(Link)`
//     margin:0 0.8rem 0 0;
//     color:#6D214F;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     font-size:1.5rem;

//     &:hover{
//         color:#ff4757;
//         transition:color 0.5s ease-in-out;
//     }
// `;

const SearchPresenter = ({ MovieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (

    <Container>
        <Helmet>
            <title>Search</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search by Moive and TV Show  is name..." value={searchTerm} onChange={updateTerm}
            />
        </Form>
        {loading ? <Loading /> :
            <>
                {MovieResults && MovieResults.length > 0 && <Section title="영화">
                    {MovieResults.map(movie =>
                        // <Links to={`movie/${movie.id}`} key={movie.id}>
                        //     {movie.title}
                        // </Links>
                        <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path ? movie.poster_path : movie.backdrop_path} title={movie.title} rating={movie.vote_average} year={movie.release_date ? movie.release_date : "미정"} isMovie={true} isAdult={movie.adult === true ? true : false} />
                    )}
                </Section>}
                {tvResults && tvResults.length > 0 && <Section title="TV 프로그램">
                    {tvResults.map(tv =>
                        // <Links to={`tv/${tv.id}`} key={tv.id}>
                        //     {tv.name}
                        // </Links>
                        <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path ? tv.poster_path : tv.backdrop_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date ? tv.first_air_date : "미정"} isMovie={false} isAdult={tv.adult === true ? true : false} />
                    )}
                </Section>}
            </>
        }
        {error && <Error text={error} />}
    </Container>
)

SearchPresenter.propTypes = {
    MovieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}
export default SearchPresenter;