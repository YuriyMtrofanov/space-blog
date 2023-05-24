import React from "react";
import PropTypes from "prop-types";

const UserEditPage = ({ id }) => {
    return (
        <h1>{`User ${id} edit page`}</h1>
    );
};

UserEditPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserEditPage;
