import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_TASK } from '../Queries'

const INITIAL_STATE = {
    title: "",
    body: "",
    completed: "",
    visibility: "",
    author: ""
}

const TestMe = () => {
    const [values, setValues] = React.useState(INITIAL_STATE);
    const [createTask, { data }] = useMutation(CREATE_TASK);

    const handleChange = (event) => {
        event.persist();
        setValues(previousValues => ({
            ...previousValues, [event.target.name]: event.target.value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let title = values.title
        let body = values.body
        let visibility = new Boolean(values.visibility);
        let author = values.author

        console.log(visibility)
        createTask({ variables: { title, body, visibility, author } });
        
    }


    return (
        <div>
            <form>
                <div>
                    <label>title</label>
                    <input type="text" name="title" onChange={handleChange} />
                </div>
                <div>
                    <label>body</label>
                    <input type="text" name="body" onChange={handleChange} />
                </div>
                <div>
                    <label>visibility</label>
                    <input type="text" name="visibility" onChange={handleChange} />
                </div>
                <div>
                    <label>author</label>
                    <input type="text" name="author" onChange={handleChange} />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}> SAVE
            </button>
                </div>

            </form>

        </div>
    );
}


export default TestMe;