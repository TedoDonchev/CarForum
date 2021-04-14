import styles from './Details.module.css';
import { Component } from 'react';
import Comment from './Comment';
//import { Redirect } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            comments: [],
            carBrand: '',
            authorName: '',
        }
    }

    getData = async () => {

        const promise = await fetch(`http://localhost:4000/articles/${this.props.match.params.id}`);

        const res = await promise.json();
        //return res;
        //console.log(res.comments);
        this.setState({ title: res.title, text: res.text, comments: res.comments , carBrand: res.carBrand, authorName: res.authorName });
    }

    // const data = getData();
    // console.log(data)
    //console.log(props);
    //getData();
    componentDidMount() {
        this.getData();
    }

    renderComments = () => {
        const { comments } = this.state;
        //console.log(comments);
        return comments.map(comment => {
            return <Comment comment={comment.comment} commentAuthor={comment.commentAuthor} key={comment.comment}/>
        })
    }

    handleComment = async (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const _id = this.props.match.params.id;
        const commentAuthor = localStorage.getItem('username')
        
        const url = 'http://localhost:4000/articles/comment';
        
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                comment,
                _id,
                commentAuthor
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const res = await promise.json();
        //console.log(res);
        this.setState({ title: res.title, text: res.text, comments: res.comments, carBrand: res.carBrand, authorName: res.authorName});
        //console.log(this.state);
        e.target.comment.value = '';
    }

    render() {
        //console.log(this.props);
        return (
            <div className={styles.detailsWrapper}>

                <div className={styles.articleDiv}>
                    <div className={styles.upperDiv}>
                        <h3>{this.state.title}</h3>
                        <div className={styles.userCarBrand}>
                            <div>From: {this.state.authorName}</div>
                            <div>About: {this.state.carBrand}</div>

                        </div>
                    </div>
                    <div className={styles.lowerDiv}>
                        <p>{this.state.text}</p>
                    </div>
                </div>
                <div className={styles.commentsDiv}>
                    <h3>Comments</h3>
                    {this.renderComments()}
                </div>
                <div className={styles.addCommentDiv}>
                    <h3>Add your opinion</h3>
                    <form className={styles.commentForm} onSubmit={this.handleComment}>
                        <textarea name='comment' className={styles.textarea}></textarea>
                        <input type='submit' value='Add Comment' className={styles.addComment} />
                    </form>
                </div>
            </div>
        )
    }


}

export default Details;