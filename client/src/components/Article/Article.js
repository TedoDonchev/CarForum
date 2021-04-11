import styles from '../Article/Article.module.css';
import { Link } from 'react-router-dom';


const Article = (props) => {

    return (
        <div className={styles.article}>
            <h3 className={styles.h3}><Link className={styles.h3Link} to={`/articles/${props._id}`}>{props.title}</Link></h3>

            <div className={styles.authorCarBrand}>
                <div className={styles.carBrandDiv}>About: {props.carBrand}</div>
                <div className={styles.authorDiv}>From: {props.authorName}</div>
            </div>
        </div>
    )
}

export default Article;