import React from "react";
import PropTypes from "prop-types";
import Cyphers from "./cyphers";

const Display = ({seconds}) => {
    return (
        <div className={"timer-number"}>
            <Cyphers value={Math.floor(seconds / 60)} />
            <span style={{opacity: seconds % 2 ? "0.3" : "1"}}>{":"}</span>
            <Cyphers value={seconds % 60} />
        </div>
    );
};
Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};
export default Display;
