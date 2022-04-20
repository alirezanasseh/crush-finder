import React from 'react';
import TwitterLogin from 'react-twitter-login';
// import axios from 'axios';

export default function Login() {
    // const step1 = () => {
    //     axios({
    //         url: 'https://api.twitter.com/oauth/request_token?oauth_callback=https://crush-finder.vercel.app',
    //         method: 'post',
    //         headers: {
    //             'Authorization': `OAuth ` +
    //             `oauth_callback="https://crush-finder.vercel.app",` +
    //             `oauth_consumer_key="${process.env.REACT_APP_API_KEY}"`
    //         }
    //     })
    // };

    const authHandler = (err: any, data: any) => {
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
            {/*<button onClick={step1}>Go</button>*/}
        </div>
    );
}