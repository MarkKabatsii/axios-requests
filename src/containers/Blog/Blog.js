import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'User',
                    }
                })
                this.setState({
                    posts: updatePosts
                })
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    clickPostHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Something went wrong. Please, try again later.</p>
        if(!this.state.error){
            post = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.clickPostHandler(post.id)}/>
            })
        }
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;