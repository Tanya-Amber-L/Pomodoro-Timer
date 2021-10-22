import React from "react";
import PropTypes from "prop-types";

Hello.PropTypes = {
    name: PropTypes.string.isRequired,
};
// Useful when working in team: Defines which props are used and from wich type + required or not
// This will give an error in the console if not respected

const Hello = ({name}) => {
    return (
        <>
            <p>{`Hello ${name}`}</p>
        </>
    );
};
export default Hello;
