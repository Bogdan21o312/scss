import React from 'react';
import classes from "./Loader.module.scss"
import Wrapper from "../Wrapper";

const Index = () => {
    return (
        <Wrapper>
            <div className={classes.Loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Wrapper>
    );
};

export default Index;