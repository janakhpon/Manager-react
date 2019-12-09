import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../Queries'

const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    password: ""
}

const TestHer = () => {
    const [values, setValues] = React.useState(INITIAL_STATE);
    const [createTask, { data }] = useMutation(CREATE_USER);

    const handleChange = (event) => {
        event.persist();
        setValues(previousValues => ({
            ...previousValues, [event.target.name]: event.target.value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let name = values.name
        let email = values.email
        let phone = values.phone
        let password = values.password

        console.log(password)
        createTask({ variables: { name, email, phone, password } });
        
    }


    return (
        <div>
            <form>
                <div>
                    <label>name</label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label>email</label>
                    <input type="text" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <div>
                    <label>phone</label>
                    <input type="text" name="phone" onChange={handleChange} />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}> SAVE
            </button>
                </div>

            </form>

        </div>
    );
}


export default TestHer;