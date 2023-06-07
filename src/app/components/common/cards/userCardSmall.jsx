import React from "react";
// import { getAge } from "../../../utils/getAge";
import PropTypes from "prop-types";

const UserCardSmall = ({ user }) => {
    return (
        <div
            className="col-lg-3 col-sm-6 p-1"
        >
            <div
                className="card user-card-sm"
                style={{
                    color: "grey",
                    textAlign: "center",
                    backgroundColor: "rgb(10, 24, 44)",
                    height: "30rem",
                    border: "none",
                    maxHeight: "40rem"
                }}
            >
                <div className="user-card-sm-image">
                    <img
                        src={user.img}
                        className="card-img-top w-100 p-2"
                        style={{
                            maxWidth: "20rem",
                            borderRadius: "50%",
                            margin: "auto"
                        }}
                        alt="image"/>
                </div>
                <div className="container">
                    <h4 className="card-title text-secondary">
                        <b>{user.firstName}{" "}{user.lastName}</b>
                    </h4>
                </div>
            </div>
        </div>
    );
};

UserCardSmall.propTypes = {
    user: PropTypes.object
};

export default UserCardSmall;
