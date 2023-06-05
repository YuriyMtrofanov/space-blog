import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import UsersLoader from "./HOC/usersLoader";
import UserImageCard from "../common/cards/UserImageCard";

const TopAuthors = ({ users }) => {
    const sortBy = { iter: "rate", order: "desc" };
    const TopAuthors = _.orderBy(users, [sortBy.iter], [sortBy.order]).slice(0, 4);
    return (
        <UsersLoader>
            {users.length > 0 &&
                TopAuthors.map(item =>
                    (<UserImageCard key={item._id} user={item} />)
                )}
        </UsersLoader>
    );
};

TopAuthors.propTypes = {
    users: PropTypes.array
};

export default TopAuthors;
