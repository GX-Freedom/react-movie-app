import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import { Link } from 'react-router-dom';
import Error from "Components/Error";
import { Helmet } from "react-helmet";



const Container = styled.div`
    position:relative;
    padding: 0px 10px;
    margin-top:1rem;
    display:flex;
    /* flex-direction:column; */
    @media screen and (max-width: 420px) {
        display:block;        
    }
`;


const Title = styled.span`
    font-size:3rem;
    font-weight:700;
    margin: 0.8rem 0;
    line-height:1.5;
`;

const OpneDays = styled.span`
    font-size:1.8rem;
    margin-top:0.7rem;
`;

const Genres = styled.span`
    font-size:1.8rem;
    margin-top:0.7rem;

`;
const RunTime = styled.div`
    font-size:1.6rem;
    margin: 0.7rem 0 0 0;
`;

const Description = styled.p`
    text-align:center;
    font-size:1rem;
    font-weight:400;
    border:1px solid red;
    margin-top:0.7rem;
    line-height:1.7;
    background:#487eb0;
    color:black;
    flex:1;
    border-radius:10px;
    padding:5px;
    box-shadow: 0px 5px 7px 0px #3B3B98;
`;

const Average = styled.div`
    font-size:1.8rem;
    margin-top:0.7rem;
`;

const Links = styled(Link)`
    position:absolute;
    top:0;
    right:0;
    color:white;
    margin-bottom:1rem;
    display:flex;
    justify-content:flex-start;
    font-size:1.5rem;
    width:50px;
    &:hover{
        color:#ff4757;
        transition:color 0.5s ease-in-out;
    }
`;

const Image = styled.div`
    background-image:url(${props => `${props.bgUrl}`});
    width:100%;
    height:800px;
    background-size:100% 100%;
    background-position:cover cover;
    background-repeat:no-repeat;
    display:flex;
    flex:0.7;
    z-index:2;
    &:hover{


    }
`;

const Asite = styled.a`
    font-size:1.3rem;
    color:#FEA47F;
    border-bottom:1px solid #F8EFBA;
    &:hover{
        color: #F97F51;
        border-bottom:1px solid #FC427B;
    }
`;

const Backdrop = styled.div`
    position:absolute;
    top:-20px;
    left:0;
    width:100%;
    height: calc(100vh - 55px);
    background-image:url(${props => `${props.bgUrl}`});
    background-position:center center;
    background-size:100% 100%;
    z-index:-1;
    filter:blur(6px);
    opacity:0.7;

`;
const InfoBox = styled.div`
    width:100%;
    display:flex;
    flex:1;
    flex-direction:column;
    padding:10px;
`;
const Episode = styled.div`

`;
const Seasons = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    &>div{
        width:140px;
        color:red;
        margin:5px;
        cursor: pointer;
    }
    &>div>span{
        width:500px;
        color:white;
        margin-top:3px;
        line-height:1.5;
        display:none;
        cursor:cell;

    }
    &>div:hover{
        width:100%;
        &>span{
            display:block;
        }
    }
`;

const handleClick = () => {
    alert("찾을 수 없습니다.")
    return 0
}


let i = 1;
const DetailPresenter = ({ reasults, error, loading, result }) => (
    <>
        {
            loading ?
                <>
                    <Helmet>
                        <title>Loaging</title>
                        {/* <link rel="shortcut icon" href={`https://image.tmdb.org/t/p/original${result.networks[0].logo_path}`} /> */}
                    </Helmet>
                    <Loading />
                </>
                : error ? <Error /> : (
                    <Container>
                        {/* {console.log(result)} */}
                        <Helmet>
                            <title>Loaging</title>
                            <link rel="shortcut icon" href={result.networks && result.networks.length >= 1 ? `https://image.tmdb.org/t/p/original${result.networks[0].logo_path}` : `https://image.tmdb.org/t/p/original${result.poster_path}`} />
                        </Helmet>
                        <Helmet>
                            <title>{result.title ? result.title : result.name}</title>
                        </Helmet>
                        <div style={{ display: "none" }}>{i = 1}</div>
                        <Links to={window.location.href.indexOf("movie") !== -1 ?
                            `/movie` : window.location.href.indexOf("tv") !== -1 ? `/tv` : `/`
                        }>
                            <i className="fas fa-arrow-left fa-2x"></i>
                        </Links>
                        {/* adult {console.log(result.videos)} */}
                        {/* <img src={`${result.production_companies[0].logo_path}`} alt="Image" /> */}
                        <Image bgUrl={result.adult ? require("assets/time.jpg") : result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : (result.last_episode_to_air ? `https://image.tmdb.org/t/p/original${result.last_episode_to_air.still_path}` : require("assets/time.jpg"))} />
                        {/* require("assets/time.jpg") */}
                        <InfoBox>
                            <Title>
                                {document.location.href.split("#/")[1].split("/")[0] === "movie" ? result.title : result.name}
                                <span style={{ fontSize: "1rem" }}>
                                    ({document.location.href.split("#/")[1].split("/")[0] === "movie" ? result.original_title : result.original_name})
                            </span>
                            </Title>
                            <div style={{ margin: "1rem" }}>
                                <Asite href={`https://www.youtube.com/watch?v=${result.videos.results.length > 0 ? result.videos.results[0].key : ""}`} onClick={result.videos.results.length > 0 ? null : handleClick} target="_blank">
                                    영상 바로가기(youtube)
                            </Asite>
                            </div>
                            <div style={{ margin: "1rem" }}>
                                <Asite href={`${result.homepage}`} onClick={result.homepage && result.homepage.length > 0 ? null : handleClick} target="_blank">
                                    공식 홈페이지
                                </Asite>
                            </div>
                            <OpneDays>
                                최근 방영: {result.release_date ? result.release_date : result.last_air_date}

                            </OpneDays>
                            <Episode>
                                {result.episode_run_time ? (result.episode_run_time.length > 1 ? result.episode_run_time.map(x => (
                                    <RunTime key={x}>
                                        에피소드{i++}:
                                        {x === 0 ? "" : `${x}분`}
                                    </RunTime>
                                )) : <RunTime key={result.id}>{result.episode_run_time > 0 ? `${result.episode_run_time}분` : ""}</RunTime>) : <RunTime key={result.id}>{result.runtime > 0 ? `${result.runtime}분` : ""}</RunTime>}
                            </Episode>
                            <Seasons>
                                {result.seasons ? (result.seasons.length >= 1 ? result.seasons.map(x => (
                                    <div key={x.id}>
                                        {`${x.name}: ${x.air_date}`}
                                        <span>{`${x.overview}`}</span>
                                    </div>
                                )) : <div key={result.id}>
                                        {`${result.seasons.name}: ${result.seasons.air_date}`}
                                        <span>{`${result.overview}`}</span>
                                    </div>) : null}
                            </Seasons>
                            <Genres>
                                장르: {result.genres.map((x, index) => index === result.genres.length - 1 ?
                                <span key={x.id}>
                                    {x.name}
                                </span> : <span key={x.id}>
                                    {x.name},
                                </span>)}
                            </Genres>
                            <Average>
                                평점: {result.vote_average}
                            </Average>
                            <Description>
                                {result.overview}
                            </Description>
                            {error && <Error text={error} />}
                            <Backdrop bgUrl={result.adult ? require("assets/time.jpg") : result.poster_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path ? result.backdrop_path : result.poster_path}` : require("assets/time.jpg")} />
                        </InfoBox>
                    </Container>
                )

        }
    </>
)

DetailPresenter.propTypes = {
    reasults: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    result: PropTypes.object,

};

export default DetailPresenter;