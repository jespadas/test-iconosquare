import React from 'react';
import { AppRouter } from '../../routers/AppRouter';
import '../../styles.css';

export const MainBody = () => {
    return (
        <div className="main">
            <AppRouter />
        </div>
    )
}
