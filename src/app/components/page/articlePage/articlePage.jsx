import React from "react";
import PropTypes from "prop-types";

const ArticlePage = ({ id }) => {
    console.log("articleId: ", id);
    return (
        <h1>{`ArticlePage ${id}`} </h1>
    );
};

ArticlePage.propTypes = {
    id: PropTypes.string.isRequired
};

export default ArticlePage;
