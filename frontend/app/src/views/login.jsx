import React, {useState} from "react";
import moment from "moment";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const data = await fetch(`/api/auth/login?username=${username}&password=${password}`, {
            method: 'POST',
            body: formData
        }).then(response => response.json())

        if(data && data.token){
            localStorage.setItem('token', data.token);
            localStorage.setItem('token_issued', moment().format("YYYY-MM-DD HH:mm:ss"));
            localStorage.setItem('token_expired', moment().add(1, 'hours').format("YYYY-MM-DD HH:mm:ss"));
            window.location.reload();
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="login">
                            <img src="static/logo.png" width="80%" className="logo_text" />

                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                    <input id="username" type="text" placeholder="Gebruikersnaam" className="form-control" name="username" required autoComplete="username" autoFocus onChange={(event) => setUsername(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <input id="password" type="password" placeholder="Wachtwoord" className="form-control" name="password" required autoComplete="password" onChange={(event) => setPassword(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-12">
                                        <button type="submit" name="submit" className="btn btn-primary" onClick={() => login()}>
                                            Inloggen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;