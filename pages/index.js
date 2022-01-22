import Head from "next/head";
const axios = require("axios");

import Twitter from '../components/Twitter';

const Index = (props) => {
    return <>
        <Head>
            <title>Twitter Trends</title>
            <meta name="description" content="This website displays 50 currently trending hashtags on twitter." />
        </Head>
        <Twitter trends={props.trends} />
    </>
};

export async function getStaticProps() {
    const url = "https://api.twitter.com/1.1/trends/place.json?id=23424848";
    const token = "AAAAAAAAAAAAAAAAAAAAAFxeVwEAAAAAEAgJQcTvi8pO4D9eXx%2BBCz0yf2E%3DmkuCAx0wAMvZjDh0o8OS5ArFOj98GumE0c893QV2WivWM3f4BI";
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios(url, config);
    const trendsArray = response.data[0].trends;

    return {
        props: {
            trends: trendsArray
        },
        revalidate: 1800
    }
}

export default Index;
