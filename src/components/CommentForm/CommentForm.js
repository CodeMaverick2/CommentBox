import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/commentsSlice';
import './CommentForm.css'; 

const CommentForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      dispatch(addComment({ 
        id: Date.now(), 
        name, 
        text, 
        date: new Date().toISOString(), 
        replies: [] 
      }));
      setName('');
      setText('');
    } else if(name === '' && text === ''){ 
      alert('Please enter both name and comment text');
    } else if(name === '') {
      alert('Please enter name');
    }else if(text === '') {
      alert('Please enter comment text');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Comment</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentForm;