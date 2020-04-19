import React from "react";
import HomePresenter from "./HomePresenter"
import { movieApi, tvApi, api } from "api";

export default class extends React.Component {
    state = {
        getPopular: null,
        tvgetPopular: null,
        upComing: null,
        topRated: null,
        tvtopRated: null,
        getLatest: null,
        today: null,
        error: null,
        loading: true,
        test: null
    }


    async componentDidMount() {
        try {
            const { data: { results: getPopular } } = await movieApi.getPopular();
            const { data: { results: tvgetPopular } } = await tvApi.getPopular();
            const { data: { results: upComing } } = await movieApi.upComing();
            const { data: { results: topRated } } = await movieApi.topRated();
            const { data: { results: tvtopRated } } = await tvApi.topRated();
            const { data: { results: getLatest } } = await tvApi.getLatest();
            const { data: { results: today } } = await tvApi.today();

            // let test;
            const test = await api.get("movie/now_playing");
            // console.log(test);
            // console.log(test.data.results[0]);

            this.setState({
                getPopular,
                tvgetPopular,
                upComing,
                topRated,
                tvtopRated,
                getLatest,
                today,
                test
            })

        } catch{
            this.setState({
                error: "Can Not Found."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        // const {
        //     getPopular,
        //     upComing,
        //     topRated,
        //     tvtopRated,
        //     getLatest,
        //     today,
        //     error,
        //     loading,
        //     test
        // } = this.state;
        return (
            <>
                <HomePresenter {...this.state} />
            </>
        )
    }
}