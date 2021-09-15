import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import AppHeader from '../components/ui/AppHeader';
//import { CreatePost } from '../components/CreateScreen'
import '../styles.css';
import UsersScreen from '../components/users/UsersScreen';
import PostsScreen from '../components/posts/PostsScreen';

export const AppRouter = () => {

    return (
        <Router>
            <div className="main">
                <Link to="/" >
                    <AppHeader />
                </Link>
                <Switch>
                    <Route exact path="/" component={UsersScreen} />
                    <Route exact path="/user/:userId/posts" component={PostsScreen} />
                    {/* <Route exact path="/user/:userId/create-post" component={CreatePost} /> */}
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};