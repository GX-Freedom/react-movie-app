import React from "react";
import TVPresenter from "./TVPresenter"
import { tvApi } from "api";

export default class extends React.Component {
    state = {
        getPopular: null,
        today: null,
        weeklyAir: null,
        topRated: null,
        getLatest: null,
        error: null,
        loading: true
    }
    async componentDidMount() {
        try {
            const { data: { results: getPopular } } = await tvApi.getPopular();
            const { data: { results: today } } = await tvApi.today();
            const { data: { results: weeklyAir } } = await tvApi.weeklyAir();
            const { data: { results: topRated } } = await tvApi.topRated();
            const { data: getLatest } = await tvApi.getLatest();
            // console.log(getLatest);

            this.setState({
                getPopular,
                today,
                weeklyAir,
                topRated,
                getLatest
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
        const {
            getPopular,
            today,
            weeklyAir,
            topRated,
            getLatest,
            error,
            loading,
        } = this.state;

        return (
            <TVPresenter getPopular={getPopular} today={today} weeklyAir={weeklyAir} topRated={topRated} getLatest={getLatest} error={error} loading={loading} />
        )
    }
}