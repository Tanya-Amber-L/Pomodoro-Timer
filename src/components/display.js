import React from "react";
import PropTypes from "prop-types";
import Cyphers from "./cyphers";

const Display = ({seconds}) => {
    valueMin = Math.floor(seconds / 60);
    valueSec = seconds % 60;
    return (
        <div className={"timer-number"}>
            <Cyphers value={valueMin} />
            <span>{":"}</span>
            <Cyphers value={valueSec} />
        </div>
    );
};
// padStart(targetLength, padString) ->
// Length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
// + The string to pad the current str with
Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};
export default Display;
