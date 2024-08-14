import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editReply, deleteReply } from '../../redux/commentsSlice';
import './Reply.css';

const Reply = ({ reply, commentId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(reply.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      if(text!==''){
        dispatch(editReply({ commentId, replyId: reply.id, text }));
      }else{
        alert("Enter text before saving the reply");
      }
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteReply({ commentId, replyId: reply.id }));
  };

  return (
    <div className="reply">
      <div className="reply-header">
        <strong>{reply.name}</strong> <small>{new Date(reply.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</small>
        <button className="delete-reply" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="reply-body">
        {isEditing ? (
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        ) : (
          <p>{reply.text}</p>
        )}
      </div>
      <div className="reply-actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      </div>
    </div>
  )
};

export default Reply;
