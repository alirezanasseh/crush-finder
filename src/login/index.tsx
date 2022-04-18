import React from 'react';
import TwitterLogin from 'react-twitter-login';

export default function Login() {
    const authHandler = (err: Error, data: any) => {
        console.log(err, data);
    };

    return (
        <div>
            <h1>Login</h1>
            <TwitterLogin
                consumerKey={process.env.REACT_APP_API_KEY || ''}
                consumerSecret={process.env.REACT_APP_API_KEY_SECRET || ''}
                authCallback={authHandler}
            />
        </div>
    );
}