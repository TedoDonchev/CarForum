import styles from './ProfilePage.module.css';
import { Component } from 'react';
import User from './User';
import Article from '../Article/Article';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            imageUrl: null,
            articles: []
        }
    }

    getUser = async () => {
        
        const promise = await fetch(`http://localhost:4000/users/${this.props.match.params.id}`);

        const user = await promise.json();
        //console.log(user);
        this.setState({ username: user.username, imageUrl: user.imageUrl, articles: user.articles});
    }

    renderUser = () => {
        const { username, imageUrl } = this.state;
        
        
        
        
        
        return (
            <User username={username} imageUrl={imageUrl} />
            
        )
    }

    renderArticles = () => {
        const { articles } = this.state;
        
        return articles.map(x => {
            return (             
                <Article key={x._id} title={x.title} carBrand={x.carBrand} authorName={x.authorName} _id={x._id} />
            )
        })
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        //console.log(this.props.match)
        const { username } = this.state;

        if(!this.state.username) {
            return <h1>User doesn't exist!</h1>
        } 

        return (
            <div className={styles.profileWrapper}>
                <h1>{username}'s Profile</h1>
                <div className={styles.profileMain}>
                    {this.renderUser()}             
                    <div className={styles.articles}>
                        <h3>Articles</h3>
                        {this.state.articles.length ? this.renderArticles() : 'User has no articles currently!'}
                        {/* {this.renderArticles()} */}
                    </div>
                </div>
            </div>
        )
    }

}

export default ProfilePage;