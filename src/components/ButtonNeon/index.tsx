import React from 'react';
import Wrapper from "../Wrapper";
import classes from "./ButtonNeon.module.scss"

const Index = () => {
    return (
        <Wrapper>
            <button className={classes.Button}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Neon Button
            </button>
        </Wrapper>
    );
};

export default Index;