import styles from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={styles.commentDiv}>
            <p>{props.comment}</p>
            <p>{props.commentAuthor}</p>
        </div>
    )
}

export default Comment;