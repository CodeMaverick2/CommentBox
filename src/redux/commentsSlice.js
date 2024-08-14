import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: JSON.parse(localStorage.getItem('comments')) || [],
  sortOrder: 'ascending' 
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
      localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    editComment: (state, action) => {
      const { id, text } = action.payload;
      const comment = state.comments.find(comment => comment.id === id);
      if (comment) {
        comment.text = text;
      }
      localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
      localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    addReply: (state, action) => {
      const { commentId, reply } = action.payload;
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.replies.push(reply);
      }
      localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    editReply: (state, action) => {
      const { commentId, replyId, text } = action.payload;
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        const reply = comment.replies.find(reply => reply.id === replyId);
        if (reply) {
          reply.text = text;
          localStorage.setItem('comments', JSON.stringify(state.comments));
        }
      }
    },
    deleteReply: (state, action) => {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.replies = comment.replies.filter(reply => reply.id !== replyId);
      }
      localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    sortByDate: (state) => {
      state.comments.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return state.sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
      });
      state.comments.forEach(comment => {
        if (comment.replies) {
          comment.replies.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return state.sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
          });
        }
      });
      localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'ascending' ? 'descending' : 'ascending';
      state.comments.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return state.sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
      });
      state.comments.forEach(comment => {
        if (comment.replies) {
          comment.replies.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return state.sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
          });
        }
      });
      localStorage.setItem('comments', JSON.stringify(state.comments));
    }
  },
});

export const { addComment, editComment, deleteComment, addReply, editReply, deleteReply, sortByDate, toggleSortOrder } = commentsSlice.actions;
export default commentsSlice.reducer;
