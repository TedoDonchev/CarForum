import React from 'react';
import styles from '../HomePage/Home.module.css';
import Article from '../Article/Article';
//import { Route, Switch } from 'react-router-dom';
//import Details from '../Article/Details';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
        }
    }



    getArticles = async () => {
        const url = 'http://localhost:4000/articles';
        const promise = await fetch(url);
        const articles = await promise.json();

        //console.log(articles);
        this.setState({ articles });
        //console.log(this.state);
    }


    componentDidMount() {
        this.getArticles();

    }

    renderArticles = () => {
        const { articles } = this.state;
        //console.log(this.match);
        return articles.map(x => {
            return (
                <Article key={x._id} title={x.title} carBrand={x.carBrand} authorName={x.authorName} _id={x._id} />
            )
        })
    }




    render() {
        {
            if (this.state.articles.length < 1) {
                return (
                    <div className={styles.homeWrapper}>
                        <h1 className={styles.homeH1}>Dashboard</h1>
                        <p>Oops, it looks like there are no articles in our database currently!</p>
                    </div>
                )
            } else {
                return (
                    <div className={styles.homeWrapper}>
                        <h1 className={styles.homeH1}>Dashboard</h1>
                        <div className={styles.articleWrapper}>
                            {this.renderArticles()}
                        </div>
                    </div>
                )
            }
        }

    }


}

export default Home;