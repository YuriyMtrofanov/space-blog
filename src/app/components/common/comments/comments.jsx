import { orderBy } from "lodash";
import React, { useEffect } from "react";
import AddCommentForm from "../forms/addCommentForm";
import CommentsList from "./commentsList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import API from "../../../../api";
// import { nanoid } from "nanoid";
import Loading from "../../ui/loading";
import { getCurrentUserId } from "../../../store/users";
import { createComment, getComments, getCommentsLoadStatus, loadCommentsList, removeComment } from "../../../store/comments";

const Comments = () => {
    const dispatch = useDispatch();
    const params = useParams(); // pageId === params.articleId
    const currentUserId = useSelector(getCurrentUserId()); // currentUserId
    const comments = useSelector(getComments());
    const isLoading = useSelector(getCommentsLoadStatus());
    useEffect(() => {
        dispatch(loadCommentsList(params.articleId));
    }, [params.articleId]);

    console.log(params.articleId);

    const handleSubmit = (data) => {
        const comment = {
            ...data,
            // _id: nanoid(),
            pageId: params.articleId,
            created_at: Date.now(),
            userId: currentUserId
        };
        console.log("Comments: ", comment);
        dispatch(createComment(comment));
    };
    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
        console.log("remove comment", id);
    };
    // const commentsList = comments.filter(comment => comment.pageId === params.articleId);
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Комментарии</h2>
                        <hr />
                        {!isLoading
                            ? (<CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />)
                            : <Loading />
                        }
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
