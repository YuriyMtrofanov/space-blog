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
            <h3>Список топ-авторов</h3>
            {users.length > 0 &&
                TopAuthors.map(item =>
                    (
                        <div key={item._id} className="col-md-3 col-sm-6 p-3">
                            <UserImageCard user={item} />
                        </div>
                    )
                )}
        </UsersLoader>
    );
};

TopAuthors.propTypes = {
    users: PropTypes.array
};

export default TopAuthors;
