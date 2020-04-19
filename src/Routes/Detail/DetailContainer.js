import React from "react";
import DetailPresenter from "./DetailPresenter"
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            reasults: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: { push },
        } = this.props;

        const { isMovie } = this.state;

        const parseId = parseInt(id);

        if (isNaN(parseId)) {
            return push("/")
        }
        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await movieApi.getDetail(parseId));
            }
            else {
                ({ data: result } = await tvApi.getDetail(parseId));
            }
        } catch{
            this.setState({
                error: "Can Not Found."
            })
        } finally {
            this.setState({
                loading: false,
                result
            })
        }

    }
    render() {
        const {
            reasults,
            error,
            loading,
            result
        } = this.state;

        return (
            <>
                <DetailPresenter reasults={reasults} error={error} loading={loading} result={result} />
            </>
        )
    }
}