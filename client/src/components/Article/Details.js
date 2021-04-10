import styles from './Details.module.css';
import { Component } from 'react';

class Details extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            comments: [],
            carBrand: ''
        }
    }
    
    getData = async () => {

        const promise = await fetch(`http://localhost:4000/articles/${this.props.match.params.id}`);

        const res = await promise.json();
        //return res;
        //console.log(res);
        this.setState({title: res.title, text: res.text, comments: res.comments, carBrand: res.carBrand});
    }

    // const data = getData();
    // console.log(data)
    //console.log(props);
    //getData();
    componentDidMount() {
        this.getData();
    }

    render() {
        console.log(this.props);
        return (
            <div className={styles.detailsWrapper}>
                <h1>{this.props.match.params.id}</h1>
                <h1>{this.state.title}</h1>
                <h1>{this.state.text}</h1>
                <h1>{this.state.comments}</h1>
                <h1>{this.state.carBrand}</h1>

            </div>
        )
    }

    
}

export default Details;