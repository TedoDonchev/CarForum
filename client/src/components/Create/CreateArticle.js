import { Component } from 'react';
import styles from './Create.module.css';
import { Redirect } from 'react-router-dom';

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        }
    }

    handleCreate = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const text = e.target.text.value;
        const carBrand = e.target.carBrand.value;
        const authorName = localStorage.getItem('username');
        const authorId = localStorage.getItem('userId');
        
        const promise = await fetch('http://localhost:4000/articles/create', {
            method: 'POST',
            body: JSON.stringify({
                title,
                text,
                carBrand,
                authorName,
                authorId
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const response = await promise.json();
        console.log(response);
        this.setState({ redirect: true });
        
    }


    render() {
        
        if(this.state.redirect) return <Redirect to="/" />;
         
        return (
            <div className={styles.createWrapper}>
                <div className={styles.createInner}>
                    <h1>Create Article</h1>
                    <form className={styles.createForm} onSubmit={this.handleCreate}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' id='title' className={styles.input} />

                        <label htmlFor='text'>Text</label>
                        <textarea type='text' name='text' id='text' className={styles.input} />

                        <label htmlFor='carBrand'>Car Brand</label>
                        <select name='carBrand' id='carBrand' className={styles.selectCarBrand}>
                            <option value='Audi'>Audi</option>
                            <option value='BMW'>BMW</option>
                            <option value='Mercedes'>Mercedes</option>
                            <option value='Opel'>Opel</option>
                            <option value='Skoda'>Skoda</option>
                            <option value='Volvo'>Volvo</option>
                        </select>

                        <input type='submit' value='Create Article' className={styles.createSubmit} />

                    </form>
                </div>

            </div>
        )
    }


}

export default CreateArticle;