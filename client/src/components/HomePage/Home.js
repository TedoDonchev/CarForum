import React from 'react';
import styles from '../HomePage/Home.module.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
        }
    }

    

    getArticles = async () => {
        const url = 'http://localhost:4000/article';
        const promise = await fetch(url);
        const articles = await promise.json();

        this.setState({ articles: articles });

    }


    async componentDidMount() {
        await this.getArticles();
        console.log(this.state);
    }

    renderArticles = () => {
        const { articles } = this.state;
        return articles.map(x => {
            return (
                <div>
                    <p>{x.title}</p>
                    <p>{x.text}</p>
                    <p>{x.author}</p>

                </div>
            )
        })
    }




    render() {
        return (
            <div className={styles.homeWrapper}>
                {this.renderArticles()}
            </div>
        )
    }

}

export default Home;