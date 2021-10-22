import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const Toolbar = ({isRunning = false, onMinus, onReset, onPlay, onPlus}) => {
    return (
        <>
            <div className={"is-flex"}>
                <Button
                    label={"-"}
                    title={"Remove 1 minute"}
                    disabled={isRunning}
                    onClick={onMinus}
                />
                <Button
                    label={"Reset"}
                    disabled={isRunning}
                    onClick={onReset}
                />
                <Button
                    label={isRunning ? "Pause" : "Play"}
                    title={`${isRunning ? "Pause" : "Play"} the timer`}
                    onClick={onPlay}
                />
                <Button
                    label={"+"}
                    title={"Add 1 minute"}
                    disabled={isRunning}
                    onClick={onPlus}
                />
            </div>
        </>
    );
};
Toolbar.propTypes = {
    isRunning: PropTypes.bool,
    onMinus: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
};
export default Toolbar;
