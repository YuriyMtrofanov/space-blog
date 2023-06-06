import React from "react";
import PropTypes from "prop-types";
import ArticleCardSmall from "../common/cards/articleCardSmall";
import _ from "lodash";
import UsersLoader from "./HOC/usersLoader";

const LatestArticles = ({ articles }) => {
    const sortBy = { iter: "date", order: "desc" };
    const latestArticles = _.orderBy(articles, [sortBy.iter], [sortBy.order]).slice(0, 4);
    return (
        <UsersLoader>
            <h3>Список последних публикаций</h3>
            {articles.length > 0 &&
                latestArticles.map(item =>
                    (<div key={item._id} className="col-md-3 col-sm-6 p-3">
                        <ArticleCardSmall article={item} />
                    </div>
                    )
                )}
        </UsersLoader>
    );
};

LatestArticles.propTypes = {
    articles: PropTypes.array
};

export default LatestArticles;
