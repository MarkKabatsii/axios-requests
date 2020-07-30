import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom'
import Posts from '../Posts/Posts'
import './Blog.css';
import NewPost from "../NewPost/NewPost";
import Header from "../../components/Header/Header";
// import PageNotFound from "../../components/PageNotFound/PageNotFound";

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <Header/>
                <React.Fragment>
                    {this.state.auth ? <Route path="/my-post" component={NewPost}/> : null}
                    <Route path="/posts" component={Posts} />
                    {/*<Route component={PageNotFound} />*/}
                    <Redirect to="/posts"/>
                </React.Fragment>
            </div>
        );
    }
}

export default Blog;