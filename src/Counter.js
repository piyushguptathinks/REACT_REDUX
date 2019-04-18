import React, { Component } from 'react';
import {connect} from 'react-redux';
import "./App.css";

class Counter extends Component {

    render() {
        debugger; 
        return ( 
            <div>
                {/* <button onClick={this.decrement}>-</button> this is one way of writting, can be also wriiten as shown in increment method */}
                <button onClick={this.props.decrement}>-</button>
                <span className="myclass">{this.props.count}</span>
                <button onClick={this.props.increment}>+</button>
            </div>
         );
    }
}

const mapStateToProps =(store)=>({
    count:store.count
})

const mapDispatchToProps=dispatch=>{
    return {
        increment:()=>dispatch({type:"INCREMENT",val:2}),
        decrement:()=>dispatch({type:"DECREMENT",val:1})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Counter);