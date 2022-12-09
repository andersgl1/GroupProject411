import React, { useState } from "react";
import { Text } from "react";
import "./Styles/Register.css";
import MenuButton from "../components/MenuButton";

class Register extends React.Component {
    render() {
        return (
            <body
                id="full"
            >
                <h2
                    className="logo music"
                >
                    Music ♪
                </h2>
                <h2
                    className="logo forecast"
                    onClick={() => {alert('getting here!')}}
                >
                    Forecast
                </h2>
                <MenuButton/>
                <div className="padding"></div>
                <h1
                    className="title"
                >
                    Music Forecast
                </h1>
                <InputField
                    name="Email Address"
                />
                <InputField
                    name="Password"
                />
                <InputField
                    name="Confirm Password"
                />
                <SubmitButton/>
                <AlreadyRegistered/>
            </body>
        );
    }
}

const InputField = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passAgain, setPassAgain] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div>
            <input 
                className="input-field" 
                id={props.name} 
                type="text" 
                placeholder={props.name}
                onChange={() => {handleChange()}}
            />
        </div>
    );
}

const SubmitButton = () => {
    function submitUser() {
        const em = String(document.getElementById("Email Address").value);
        const pass = String(document.getElementById("Password").value);
        const passAgain = String(document.getElementById("Confirm Password").value);
        if (pass != passAgain) {
            alert("Passwords must match!");
        }

        alert("Created account ");

        window.location.assign("/");
        //createUser('John', 'Smith', em, pass);
    }

    return (
        <div>
            <button
                className="submit-button login"
                type="button"
                onClick={() => {submitUser()}}
            >
                Create New Account
            </button>
        </div>
    );
}

const AlreadyRegistered = () => {
    return (
        <div 
            className="already-account"
        >
            <h5>
                Already have an account? {' '}
                <u
                    onClick={() => {alert("hi there!")}}
                >
                    Login here.
                </u>
            </h5>
        </div>
    );
}

export default Register;
