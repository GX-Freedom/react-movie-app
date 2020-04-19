import React from "react";
import styled from "styled-components";


const Loading = styled.div`
    font-size:3rem;
    text-align:center;
    /* justify-content:center; */
    /* align-items:center; */
    &>i{
        animation: loadings 0.5s linear infinite;
    }
    &>div{
        font-size:2rem;
    }
    @keyframes loadings{
        0%{
            transform:rotateZ(0);
        }
        100%{
            transform:rotateZ(360deg);
        }
    }
`;
export default () => {
    return (
        <>
            <Loading>
                <i className="fas fa-spinner"></i>
                <div>
                    Loading
            </div>
            </Loading>

        </>
    )
}