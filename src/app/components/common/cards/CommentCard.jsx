import React from "react";
import PropTypes from "prop-types";
import api from "../../../../api";
// import { Link } from "react-router-dom";
import { displayDate } from "../../../utils/displayDate";
// import { useSelector } from "react-redux";
// import { getCurrentUserId, getUserById } from "../../../store/users";

const CommentCard = ({
    content,
    created_at: created,
    _id: id,
    userId,
    onRemove
}) => {
    // const user = useSelector(getUserById(userId));
    const user = api.users.users.find(u => u._id === userId);
    // const currentUserId = useSelector(getCurrentUserId());
    const currentUserId = "67rdca3eeb7f6fgeed471815"; // заглушка
    return (
        <div className="card-body mb-3 d-flex flex-start ">
            <img
                src={user.img}
                className="rounded-circle shadow-1-strong me-3"
                alt="avatar"
                width="65"
                height="65"
            />
            <div className="flex-grow-1 flex-shrink-1">
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1 ">
                            {user &&
                                <span>{`${user.lastName} ${user.firstName}`}</span>
                            }{" "}
                            <span className="small">
                                - {displayDate(created)}
                            </span>
                        </p>
                        {currentUserId === userId && (
                            <button
                                className="btn btn-sm text-primary d-flex align-items-center"
                                onClick={() => onRemove(id)}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        )}
                    </div>
                    <p className="small mb-0">{content}</p>
                </div>
            </div>
        </div>
    );
};

CommentCard.propTypes = {
    content: PropTypes.string,
    edited_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    userId: PropTypes.string,
    onRemove: PropTypes.func,
    _id: PropTypes.string
};

export default CommentCard;
