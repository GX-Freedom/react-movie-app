import React from "react";
import SearchPresenter from "./SearchPresenter"
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
    state = {
        MovieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    }

    updateTerm = event => {
        const {
            target: { value }
        } = event;

        this.setState({
            searchTerm: value
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading: true
        })
        try {
            const { data: { results: MovieResults } } = await movieApi.search(searchTerm);
            const { data: { results: tvResults } } = await tvApi.search(searchTerm);
            this.setState({
                MovieResults,
                tvResults,
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
            MovieResults,
            tvResults,
            searchTerm,
            error,
            loading,
        } = this.state;
        return (
            <SearchPresenter MovieResults={MovieResults} tvResults={tvResults} searchTerm={searchTerm} error={error} loading={loading} handleSubmit={this.handleSubmit} updateTerm={this.updateTerm} />
        )
    }
}