import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class DeletePost extends Component {
constructor(props){
    super(props);
    this.state = { }
    this.onSubmit=this.onSubmit.bind(this);
}

onSubmit(e){
    debugger;
    this.props.deletePost()
}
    
    render() { 
        return ( 
            <form onSubmit={this.onSubmit}>
                <h2>Delete Item</h2>
                <button type="submit">Delete Record</button>
            </form>
         );
    }
}
 
export default connect(null, {deletePost})(DeletePost);