import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import AllRecords from './components/JSON/AllRecords';

import Posts from './components/Posts';
import Postform from './components/Postform';
import PostByID from './components/PostByID';
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';



import store from './store'

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className='myapp'>
        <AllRecords />
        <h2>Delete Post</h2>
        <DeletePost />
        <hr />
        <h2>Update Request</h2>
        <UpdatePost />
        <hr />
          <h2>All Post Data</h2>
          <PostByID />
          <hr/>
          <Postform /> 
          <hr />
          <Posts />
          </div>
        </Provider>
    );
  }
}

export default App;
