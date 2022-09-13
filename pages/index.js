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
    const token = "AAAAAAAAAAAAAAAAAAAAAPINdgEAAAAA7elmp0LXsBvPwNlgnqsZFa06Oxk%3DsXgeESuRlMI1UBnlJnIMfcGLDlsesQDQ13dPyZ02c6b1UCWIr4";
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
