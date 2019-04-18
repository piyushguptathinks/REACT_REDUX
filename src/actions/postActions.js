import {FETCH_POSTS,NEW_POST,FETCH_POSTITEM,UPDATE_POST,DELETE_POST,GETALLRECORDS} from './types';

export const fetchPosts=()=>dispatch=>{
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>
        dispatch({
        type:FETCH_POSTS,
        payload:posts
    }));
}

export const createPost=(postData)=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(post=>dispatch(
        {
            type:NEW_POST,
            payload:post
        })
    )
}

//Suman Code starts here for get post based on ID

export const fetchPostItem=(id)=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then(res=>
        res.json())
    .then(postitem=>
        dispatch({
        type:FETCH_POSTITEM,
        payload:postitem
    }));
}

export const updatePostItem=(id,postData)=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(updatePost=>
        dispatch({
        type:UPDATE_POST,
        payload:updatePost
        })
    )
}

export const deletePost=()=>dispatch=>{
    debugger;
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
  .then(response => response.json())
  .then(deletePost=>
        dispatch({
        type:DELETE_POST,
        payload:deletePost
        })
    )
}

//SQL Section to play with records
export const fetchJSON=()=>dispatch=>{
    console.log('Fetching SQL Data method');
    const user= [{'Username':'Suman','Email':'Suman.kumar@gmail.com'},{'Username':'Nikhil','Email':'Nikhil.kumar@gmail.com'}];
    dispatch({
        type:GETALLRECORDS,
        payload: user
    })
}

