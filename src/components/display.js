import React from "react";
import PropTypes from "prop-types";
import Cyphers from "./cyphers";
import styled from "styled-components";

const Display = ({seconds}) => {
    return (
        <TimerContainer>
            <Cyphers value={Math.floor(seconds / 60)} />
            <span style={{opacity: seconds % 2 ? "0.3" : "1"}}>{":"}</span>
            <Cyphers value={seconds % 60} />
        </TimerContainer>
    );
};

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};

const TimerContainer = styled.div`
    font-size: 7rem;
    text-align: center;
    border: 4px solid #f4f4f4;
    border-radius: 50%;
    height: 380px;
    width: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

export default Display;
