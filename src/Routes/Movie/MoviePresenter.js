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
  padding: 0px 10px;
`;

// const Item = styled.div`
//     width:100%;
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//     justify-content:space-between;
//     /* flex-direction:column; */
//     margin:0.7rem 0;
// `;
// const Title = styled.div`

// `;

// const Links = styled(Link)`
//     margin:0 0.8rem 0 0;
//     color:#6D214F;
//     overflow: hidden;
//     text-overflow:ellipsis;
//     display:inline-block;
//     font-size:1.5rem;

//     &:hover{
//         color:#ff4757;
//         transition:color 0.5s ease-in-out;
//     }
// `;

// const OpenDays = styled.span`
//     display:flex;
//     font-size:1rem;
//     margin-top:1rem;
// `;

const MoviePresernter = ({ nowPlaying, getPopular, upComing, topRated, getLatest, error, loading }) => (
    <>
        <Helmet>
            <title>Movies</title>
        </Helmet>
        {
            loading ? <Loading />
                : (
                    <Container>
                        <Section title="현재 상영중인 영화">
                            {nowPlaying.map(movie =>
                                // <Item key={movie.id}>
                                //     <Title>
                                //         <Links to={`movie/${movie.id}`}>
                                //             {movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}
                                //         </Links>
                                //     </Title>
                                //     <OpenDays>
                                //         {movie.release_date}
                                //     </OpenDays>
                                // </Item>
                                <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} isAdult={movie.adult === true ? true : false} />
                            )}
                        </Section>
                        <Section title="인기있는 영화">
                            {getPopular.map(movie =>
                                // <Item key={movie.id}>
                                //     <Title>
                                //         <Links to={`movie/${movie.id}`}>
                                //             {movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}
                                //         </Links>
                                //     </Title>
                                //     <OpenDays>
                                //         {movie.release_date}
                                //     </OpenDays>
                                // </Item>
                                <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} isAdult={movie.adult === true ? true : false} />
                            )}
                        </Section>
                        <Section title="개봉 예정 영화">
                            {upComing.map(movie =>
                                // <Item key={movie.id}>
                                //     <Title>
                                //         <Links to={`movie/${movie.id}`}>
                                //             {movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}
                                //         </Links>
                                //     </Title>
                                //     <OpenDays>
                                //         {movie.release_date}
                                //     </OpenDays>
                                // </Item>
                                <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} isAdult={movie.adult === true ? true : false} />
                            )}
                        </Section>
                        <Section title="높은 평점">
                            {topRated.map(movie =>
                                // <Item key={movie.id}>
                                //     <Title>
                                //         <Links to={`movie/${movie.id}`}>
                                //             {movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}
                                //         </Links>
                                //     </Title>
                                //     <OpenDays>
                                //         {movie.release_date}
                                //     </OpenDays>
                                // </Item>
                                <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} isAdult={movie.adult === true ? true : false} />
                            )}
                        </Section>
                        <Section title="개봉 예정 영화">
                            {getLatest.length > 1 ? getLatest.map(movie =>
                                // <Item key={movie.id}>
                                //     <Title>
                                //         <Links to={`movie/${movie.id}`}>
                                //             {movie.title.length > 15 ? movie.title.substring(0, 15) + "..." : movie.title}
                                //         </Links>
                                //     </Title>
                                //     <OpenDays>
                                //         {movie.release_date}
                                //     </OpenDays>
                                // </Item>
                                <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date ? movie.release_date : "미정"} isMovie={true} isAdult={movie.adult === true ? true : false} />
                            ) : (
                                    // <Item key={getLatest.id}>
                                    //     <Title>
                                    //         <Links to={`movie/${getLatest.id}`}>
                                    //             {getLatest.title.length > 15 ? getLatest.title.substring(0, 15) + "..." : getLatest.title}
                                    //         </Links>
                                    //     </Title>
                                    //     <OpenDays>
                                    //         {getLatest.release_date ? getLatest.release_date : "미정"}
                                    //     </OpenDays>
                                    // </Item>
                                    <Poster key={getLatest.id} id={getLatest.id} imageUrl={getLatest.poster_path} title={getLatest.title} rating={getLatest.vote_average} year={getLatest.release_date ? getLatest.release_date : "미정"} isMovie={true} isAdult={getLatest.adult === true ? true : false} />
                                )}
                        </Section>
                        {error && <Error text={error} />}

                    </Container>
                )

        }
    </>

)
MoviePresernter.propTypes = {
    nowPlaying: PropTypes.array,
    getPopular: PropTypes.array,
    upComing: PropTypes.array,
    topRated: PropTypes.array,
    getLatest: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
export default MoviePresernter;