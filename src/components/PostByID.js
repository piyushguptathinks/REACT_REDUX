import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPostItem} from '../actions/postActions';

class PostByID extends Component {
    
    componentDidMount(){
        console.log('Iterating Post Item');
        debugger;
        this.props.fetchPostItem(1)
    }

    render() {
        const {id,title,body}=this.props.postitem;
        return(
            <React.Fragment>
            <h1>Post Item Details</h1>
            <div key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            
        </React.Fragment>
        )
    }
}

const mapStateToProps=state=>({
    postitem:state.posts.itemDetails
})
 
export default connect(mapStateToProps,{fetchPostItem}) (PostByID);