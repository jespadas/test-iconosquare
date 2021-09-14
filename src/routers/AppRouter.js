import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import PostsList from '../components/posts/PostsList';
import UserList from '../components/users/UserList';
import AppHeader from '../components/ui/AppHeader';
import { CreatePost } from '../components/CreateScreen'
import '../styles.css';

export const AppRouter = () => {

    return (
        <Router>
            <div className="main">
                <Link to="/" >
                    <AppHeader />
                </Link>
                <Switch>
                    <Route exact path="/" component={UserList} />
                    <Route exact path="/user/:userId/posts" component={PostsList} />
                    <Route exact path="/user/:userId/create-post" component={CreatePost} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};