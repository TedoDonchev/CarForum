import styles from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={styles.commentDiv}>
            <div className={styles.authorDiv}>
                <p>From: {props.commentAuthor}</p>
            </div>
            <div className={styles.responseDiv}>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment;