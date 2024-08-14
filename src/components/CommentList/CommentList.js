import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from '../Comment/Comment';
import { toggleSortOrder } from '../../redux/commentsSlice';
import './CommentList.css';

const CommentList = () => {
  const comments = useSelector((state) => state.comments.comments);
  const sortOrder = useSelector((state) => state.comments.sortOrder);
  const dispatch = useDispatch();

  const handleSortToggle = () => {
    dispatch(toggleSortOrder());
  };

  return (
    <div className="comment-list-container">
      <div className="sort-button-container">
        <button onClick={handleSortToggle} className="sort-by-date-button">
          Sort By Date {sortOrder === 'ascending' ? '▲' : '▼'}
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
