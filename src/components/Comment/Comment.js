import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment, addReply } from '../../redux/commentsSlice';
import Reply from '../Reply/Reply';
import './Comment.css'; 

const Comment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [text, setText] = useState(comment.text);
  const [replyName, setReplyName] = useState('');
  const [replyText, setReplyText] = useState('');
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      if(text !== ''){
        dispatch(editComment({ id: comment.id, text }));
      }else{
        alert('Please enter comment text');
      }
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment.id));
  };

  const handleReply = (e) => {
    e.preventDefault();
    if (replyName && replyText) {
      dispatch(addReply({
        commentId: comment.id,
        reply: { id: Date.now(), name: replyName, text: replyText, date: new Date().toISOString() }
      }));
      setReplyName('');
      setReplyText('');
      setIsReplying(false);
    } else if(replyName === '' && replyText === ''){
      alert('Please enter both name and reply text');
    } else if(replyName === '') {
      alert('Please enter name');
    }else if(replyText === '') {
      alert('Please enter reply text');
    }
  };

  return (
    <div className="comment">
      <div className='comment-container'>
        <div className="comment-header">
            <strong>{comment.name}</strong> <small>{new Date(comment.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</small>
            <button className="delete-button" onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <div className="comment-body">
            {isEditing ? (
              <textarea value={text} onChange={(e) => setText(e.target.value)} />
            ) : (
              <p>{comment.text}</p>
            )}
          </div>
          <div className="comment-actions">
            <button onClick={() => setIsReplying(!isReplying)}>
              {isReplying ? 'Cancel Reply' : 'Reply'}
            </button>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
          </div>
          {isReplying && (
            <form className="reply-form" onSubmit={handleReply}>
              <p>Reply</p>
              <input
                type="text"
                placeholder="Name"
                value={replyName}
                onChange={(e) => setReplyName(e.target.value)}
        
              />
              <textarea
                placeholder="Reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button type="submit">Post</button>
            </form>
          )}
      </div>
      
      <div className="replies">
        {comment.replies.map((reply) => (
          <Reply key={reply.id} reply={reply} commentId={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
