import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { getPosts } from '../modules/posts';
import PostList from './PostList';

const PostListContainer = () => {
    const { loading, data, error } = useSelector(state=> state.posts.posts)
    const dispatch = useDispatch();

    // 컴포넌트 마운트 후 포스트 목록 요청하기
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러발생</div>
    if(!data) return null
    return (
        <PostList posts={data} />
    );
};

export default PostListContainer;