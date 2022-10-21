import React, {FC} from 'react';
import Wrapper from "../Wrapper";
import classes from "./Card.module.scss"

interface CardProps {
    titleMain: string,
    textMain?: string,
    titleBack?: string,
    textBack?: string,
    buttonBack: string,
}

const Index: FC<CardProps> = ({ ...props}) => {
    return (
        <Wrapper>
            <div className={classes.Card}>
                <div className={classes.CardMain}>
                    <h2>{props.titleMain}</h2>
                    <p>{props.textMain}</p>
                </div>
                <div className={classes.CardBack}>
                    <h2>{props.titleBack}</h2>
                    <p>{props.titleBack}</p>
                    <button>
                        {props.buttonBack}
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

export default Index;