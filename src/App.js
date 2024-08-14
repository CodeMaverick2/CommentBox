import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentForm />
        <CommentList />
      </div>
    </Provider>
  );
}

export default App;