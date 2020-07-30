import React, { Component } from 'react'
import axios from "axios";
import Post from "../../components/Post/Post";
import './Posts.css'
import {Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";


class Posts extends Component {
    state = {
        posts: [],
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
        console.log(this.props)
        this.props.history.push('/posts/' + id);
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Something went wrong. Please, try again later.</p>
        if(!this.state.error){
            post = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.clickPostHandler(post.id)}/>
                )
            })
        }
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;