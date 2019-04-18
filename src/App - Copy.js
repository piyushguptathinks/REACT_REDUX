import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import {createStore} from "redux";
import {Provider} from 'react-redux';

class App extends Component {
  render() {

    const initialState={
      count:0
    }

    function myreducer(state=initialState,action){
      switch(action.type){
        case "INCREMENT":
        return {
          count:state.count+action.val
        }
        case "DECREMENT":
        return {
          count:state.count-action.val
        };
        default:
        return state;
      }
    }
    const store=createStore(myreducer);

    return (
      <Provider store={store} >
        <Counter />
      </Provider>
    );
  }
}

export default App;
