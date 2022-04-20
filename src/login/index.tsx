import React from 'react';
import axios from 'axios';

export default function Login() {
    const step1 = () => {
        axios({
            url: 'https://api.twitter.com/oauth/request_token?oauth_callback=https://crush-finder.vercel.app',
            method: 'post',
        })
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={step1}>Go</button>
        </div>
    );
}