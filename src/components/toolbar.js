import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import styled from "styled-components";

const Toolbar = ({isRunning = false, onMinus, onReset, onPlay, onPlus}) => {
    return (
        <ToolContainer>
            <Button
                label={"-"}
                title={"Remove 1 minute"}
                disabled={isRunning}
                onClick={onMinus}
            />
            <Button
                label={"RESET"}
                title={"Reset the timer"}
                disabled={isRunning}
                onClick={onReset}
            />
            <Button
                label={isRunning ? "PAUSE" : "PLAY"}
                title={`${isRunning ? "Pause" : "Play"} the timer`}
                onClick={onPlay}
            />
            <Button
                label={"+"}
                title={"Add 1 minute"}
                disabled={isRunning}
                onClick={onPlus}
            />
        </ToolContainer>
    );
};

Toolbar.propTypes = {
    isRunning: PropTypes.bool,
    onMinus: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
};

const ToolContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #f4f4f4;
    border-radius: 10px;
    margin: 1rem;
    width: 320px;
`;

export default Toolbar;
