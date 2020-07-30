import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'

import './NewPost.css';
import axios from "axios";

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'User',
        // submitted: false
    }

    addedPostHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts/', data)
            .then(response => {
                console.log(response)
                // case: 1
                // this.setState({
                //     submitted: true
                // })
                //--------------------------------
                //case:2
                //You can user push or replace
                this.props.history.push('/posts/');
            })
    }


    render () {
        // let redirect = null
        // if(this.state.submitted) {
        //     redirect = <Redirect to="/posts/"/>
        // }
        return (

            <div className="NewPost">
                {/*{redirect}*/}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={event => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={event => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={event => this.setState({author: event.target.value})}>
                    <option value="User">User</option>
                    <option value="Second user">User2</option>
                </select>
                <button onClick={this.addedPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;