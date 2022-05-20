import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Inscription() {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    // const [number, setNumber] = useState(100);  

    const SubmitHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        setName(e.target.name.value);
        axios.post('http://127.0.0.1:8000/api/register', {
            name: name,
            email: email,
            password: password
        })
    }



    return (
        <div className="Inscription">
                            <div className="d-flex w-100 justify-content-center align-items-center text-center p-3 flex-column">
                    <h1>Register</h1>
                    <form className="w-50" onSubmit={(e) => SubmitHandler(e)}>
                        <div className="form-group p-5 w-100">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Adresse Mail</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" name="password" placeholder="mot de passe" />
                            <label htmlFor="password">Mot de passe</label>
                        </div>
                        <button type="submit" className="btn btn-primary m-2">Inscription</button>
                    </div>
                    </form>
                </div>
        </div>
    );
}

export default Inscription;