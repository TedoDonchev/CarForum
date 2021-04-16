import styles from './Create.module.css';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';


class EditArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            title: this.props.title ,
            text: this.props.text,
            carBrand: this.props.carBrand,
        }
    }

    handleChange = (e) => {
        const elChanged = e.target.id;
        const obj = { 
            [elChanged]: e.target.value 
        }
        this.setState(obj);
    }

    // handleCreate = async (e) => {
    //     e.preventDefault();
    //     const title = e.target.title.value;
    //     const text = e.target.text.value;
    //     const carBrand = e.target.carBrand.value;
    //     const authorName = localStorage.getItem('username');
    //     const authorId = localStorage.getItem('userId');

    //     const promise = await fetch('http://localhost:4000/articles/create', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title,
    //             text,
    //             carBrand,
    //             authorName,
    //             authorId
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })

    //     const response = await promise.json();
    //     console.log(response);
    //     this.setState({ redirect: true });

    // }

    handleEdit = async (e) => {
        e.preventDefault();
        const _id = this.props.id;
        const title = e.target.title.value;
        const text = e.target.text.value;
        const carBrand = e.target.carBrand.value;
        //console.log({ title, text, carBrand });

        const promise = await fetch(`http://localhost:4000/articles/edit/${this.props.id}`, {
            method: 'POST',
            body: JSON.stringify({
                _id,
                title,
                text,
                carBrand,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const response = await promise.json();
        //console.log(response);
        this.setState({ redirect: true })
    }

    componentDidMount() {
        this.setState({title: this.props.title, text: this.props.text, carBrand: this.props.carBrand});
    }

    render() {

        if (this.state.redirect) return <Redirect to={`/`} />;

        return (
            <div className={styles.createWrapper}>
                <div className={styles.createInner}>
                    <h1>Edit Article</h1>
                    <form className={styles.createForm} onSubmit={this.handleEdit}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' id='title' className={styles.input} value={this.state.title} onChange={this.handleChange}/>

                        <label htmlFor='text'>Text</label>
                        <textarea type='text' name='text' id='text' className={styles.input} value={this.state.text} onChange={this.handleChange}/>

                        <label htmlFor='carBrand'>Car Brand</label>
                        <select name='carBrand' id='carBrand' className={styles.selectCarBrand} value={this.state.carBrand} onChange={this.handleChange}>
                            <option value='Audi'>Audi</option>
                            <option value='BMW'>BMW</option>
                            <option value='Mercedes'>Mercedes</option>
                            <option value='Opel'>Opel</option>
                            <option value='Skoda'>Skoda</option>
                            <option value='Volvo'>Volvo</option>
                        </select>

                        <input type='submit' value='Edit Article' className={styles.createSubmit} />

                    </form>
                </div>

            </div>
        )
    }
}

export default EditArticle;
