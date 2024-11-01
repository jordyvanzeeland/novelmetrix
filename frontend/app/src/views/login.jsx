import React from "react";

const Login = (props) => {
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
                                        <input id="email" type="email" placeholder="E-mailadres" className="form-control" name="email" required autoComplete="email" autoFocus onChange={(event) => setUsername(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <input id="password" type="password" placeholder="Wachtwoord" className="form-control" name="password" required autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} />
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


            {/* <div className='login_overlay'></div>
            <div className='login'>
                <img className="logo_text" src="static/logo.png" style={{ width: '280px' }} />

                <form>
                    <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="username" id="username" placeholder="Gebruikersnaam" aria-describedby="emailHelp" required/>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Wachtwoord" required/>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-12">
                                        <button type="submit" name="submit" className="btn btn-primary">
                                            Inloggen
                                        </button>
                                    </div>
                                </div>
                        </div>
                </form>
            </div> */}
        </React.Fragment>
    );
}

export default Login;