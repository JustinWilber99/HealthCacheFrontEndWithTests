import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUser } from '../../redux/actions';



export const Login: React.FC<any> = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const appState = useSelector<any, any>((state) => state);
  

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
        
            console.log(appState.userLogin.user_id);
        
    }, [appState]);

    const handleChange = (e: any) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const login = async (event: any) => {
        event.preventDefault();
        await dispatch(
            loginUser({ username, password })
        );
        navigate("/Profile");
    }

    return (
        <div className="container pt-5">

            <div id="login-container" className="container shadow p-3 mb-5 bg-secondary3 text-black rounded">

                <h1 className="fw-light text-primary2">Login to your account</h1>
                <hr />
                <form>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={handleChange} id="username" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange} id="password" />
                    </div>

                    <hr />
                    <button type="submit" className="btn btn-primary text-primary2 btn-block " onClick={login}>Login</button>

                </form>
            </div>
        </div>
    );

}