import React, { Component } from 'react'
import {connect} from 'react-redux';
import {updatePostItem} from '../actions/postActions';

class UpdatePost extends Component {

    constructor(props){
        super(props);
        this.state = { 
            itemColl:{}
         }
        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault();
        //Call method to update
        debugger;
        const postData={
            id: 1,
            title: 'Suman New',
            body: 'Kumar New',
            userId: 1
        }
        this.props.updatePostItem(1,postData);
        this.setState(()=>{
            return {itemColl:this.props.itemUpdated}
        })
        debugger;
        console.log(this.state.itemColl)
    }

    render() { 
        return ( 
        <form onSubmit={this.onSubmit}>
            <h1>Update Post</h1>
            <button type="submit">Update</button>
        </form> );
    }
}
 
export default connect(null, {updatePostItem})(UpdatePost);