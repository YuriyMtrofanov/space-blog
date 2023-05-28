import React from "react";
import PropTypes from "prop-types";

const UserInfoCard = ({ user }) => {
    const { about, firstName, lastName } = user;
    return (
        <div className="card">
            <div className="card-header">
                <h3>
                    <b>{firstName}{" "}{lastName}</b>
                </h3>
            </div>
            <div className="card-body">
                <div className="card-about mb-2">
                    <h5> Краткая информация о себе: </h5>
                    <ul>
                        {about}
                    </ul>
                </div>
            </div>
        </div>
    );
};

UserInfoCard.propTypes = {
    user: PropTypes.object
};

export default UserInfoCard;
