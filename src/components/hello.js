import React from "react";
import PropTypes from "prop-types";

const Hello = ({name}) => {
    return (
        <>
            <p>{`Hello ${name}`}</p>
        </>
    );
};

Hello.propTypes = {
    name: PropTypes.string.isRequired,
};
// Useful when working in team: Defines which props are used and from wich type + required or not
// This will give an error in the console if not respected
export default Hello;
