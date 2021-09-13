import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import PostsList from '../components/posts/PostsList';
import UserList from '../components/users/UserList';
import AppHeader from '../components/ui/AppHeader';
import { CreatePost } from '../components/CreateScreen'
import '../styles.css';

//import { AppContext } from '../context/AppContext';

export const AppRouter = () => {

    return (
        <>

            <Router>
                <Link to="/" >
                    <AppHeader />
                </Link>

                <div>
                    <Switch>
                        <Route exact path="/" component={UserList} />
                        <Route exact path="/user/:userId/posts" component={PostsList} />
                        <Route exact path="/user/:userId/create-post" component={CreatePost} />
                        <Redirect to='/' />
                    </Switch>
                </div>
            </Router>
        </>
    );
};