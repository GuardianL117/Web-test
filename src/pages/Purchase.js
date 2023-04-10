import axios from 'axios';

export default function Page1() {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    
    function addGold() {
        var ax = require("axios").default;

        var options = {
        method: 'POST',
        url: 'https://dev-4xcgebpz80whiwhq.us.auth0.com/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: '',
            client_secret: '',
            audience: 'https://dev-4xcgebpz80whiwhq.us.auth0.com/api/v2/'
        })
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <button onClick={addGold()}>
            hello
        </button>
    )
}