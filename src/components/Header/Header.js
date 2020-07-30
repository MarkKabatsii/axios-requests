import React, {Component} from "react";
import './Header.css'
import {NavLink} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header className="Header">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/posts/" >Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: "/my-post/",
                                hash: '#submit',
                                search: "?quick-submit=true",
                            }}>New Post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

