import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from '../Comment/Comment';
import { sortByDate } from '../../redux/commentsSlice';
import './CommentList.css';

const CommentList = () => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  return (
    <div className="comment-list-container">
      <div className="sort-button-container">
        <button onClick={() => dispatch(sortByDate())} className="sort-by-date-button">
          Sort By: Date and time &darr;
        </button>
      </div>
      <div className="comment-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
