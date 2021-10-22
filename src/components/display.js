import React from "react";
import PropTypes from "prop-types";
import Cyphers from "./cyphers";

const Display = ({seconds}) => {
    valueMin = Math.floor(seconds / 60);
    valueSec = seconds % 60;
    return (
        <div className={"timer-number"}>
            <Cyphers value={valueMin} />
            <span style={{opacity: seconds % 2 ? "0.3" : "1"}}>{":"}</span>
            <Cyphers value={valueSec} />
        </div>
    );
};
Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};
export default Display;
