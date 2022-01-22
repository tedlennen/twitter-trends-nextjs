import { useState } from 'react'
import styles from "./Twitter.module.css";

const Twitter = (props) => {
    const [tweets, setTweets] = useState(props.trends);

    const convertVolumeToShort = (volume) => {
        if (volume > 1000000)
            return (volume / 1000000).toFixed(2) + "M";
        else if (volume > 1000)
            return (volume / 1000).toFixed(2) + "K";
        else
            return volume;
    }
    return (
        <>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.table_row}>
                            <th className={styles.table_head}>Rank</th>
                            <th className={styles.table_head}>Name</th>
                            <th className={styles.table_head}>Tweet Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tweets?.map((tweet, index) => {
                                return <tr key={index} className={styles.table_row}>
                                    <td className={styles.table_desc}>{index + 1}</td>
                                    <td className={styles.table_desc}><a href={tweet.url} className='anchor'>{tweet.name}</a></td>
                                    <td className={styles.table_desc}>{tweet.tweet_volume ? convertVolumeToShort(tweet.tweet_volume) : "Under 10K"}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Twitter;
