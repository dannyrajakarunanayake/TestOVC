import { Button } from '@material-ui/core';
import React, {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchPosts }from '../slices/posts';
import "../pages/Post.css";
import { RootState } from '../slices';


const Post = (props:any) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const { posts } = useSelector(
        (state: RootState) => state.posts
    );

    const handleInput = (event: React.FormEvent) => {
        event.preventDefault();
    };
    
   
    useEffect(() => {
        dispatch(fetchPosts("1"))
     }, [])
    return (
        <>
            <h1>Post Item</h1>
            <div className="search-box">
            <label>Search:&nbsp;</label>
        <input type="text" onChange={handleInput} />
            
            {posts.length === 0 ? <p>Loading</p> : (
                <table className="user-list">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Body</td>
                            
                        </tr>
            </thead>
            <tbody>
            {posts.map((post: {title:string, body:string}) => (
                        <tr>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        
                        </tr>
                    ))} 
               
            </tbody>
            </table>
            )}
            </div>
        
            
        </>
        
    )
}


export default Post;


