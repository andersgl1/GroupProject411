import React, { useState } from "react";
import { Text } from "react";
import "./Styles/Register.css";

class Login extends React.Component {
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
                >
                    Forecast
                </h2>
                <MenuButton/>
                <div className="padding"></div>
                <div>
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
                <SubmitButton/>
                <NotRegistered/>
                </div>
            </body>
        );
    }
}


const MenuButton = () => {

    function circleShow() {
        const circleDiv = document.getElementById("circle");
        circleDiv.style.opacity = ".5";
        circleDiv.style.width = "160px";
        circleDiv.style.height = "100px";
    }

    function circleHide() {
        const circleDiv = document.getElementById("circle");
        circleDiv.style.opacity = "0";
        circleDiv.style.width = "25px";
        circleDiv.style.height = "25px"
    }

    return (
        <h2
            className="logo menu"
            onClick={() => {alert("hi there!")}}
            onMouseEnter={() => {circleShow()}}
            onMouseLeave={() => {circleHide()}}
        >
          MENU
            <div
                className="circle-animation"
                id="circle"
                hidden={true}
            >
            </div>  
        </h2>
    );
}

const InputField = (props) => {
    const [message, setMessage] = useState('');
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <div>
            <input 
                className="input-field" 
                id={props.name} type="text" 
                placeholder={props.name}
                onChange={handleChange}
            />
        </div>
    );
}

const SubmitButton = () => {
    
    function info() {
        alert("here! ");
    }

    return (
        <div>
            <button
                className="submit-button login"
                type="button"
                onClick={() => {info()}}
            >
                Sign In
            </button>
        </div>
    );
}

const NotRegistered = () => {
    return (
        <div 
            className="already-account login-page"
        >
            <h5>
                Don't have an account? {' '}
                <u
                    onClick={() => {alert("hi there!")}}
                >
                    Register here.
                </u>
            </h5>
        </div>
    );
}

export default Login;
