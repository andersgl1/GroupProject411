import React from "react";
import "./Styles/Menu.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <body
                id="menu-body"
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
                <div className="padding"></div>
                <MenuComponent
                    page="About"
                />
                <MenuComponent
                    page="Profile"
                />
                <MenuComponent
                    page="Settings"
                />
                <MenuComponent
                    page="Log Out"
                    style="more-space"
                />
            </body>
        );
    }
}

const MenuComponent = (props) => {
    function givePage() {
        if (props.page == "About") {
            return "/";
        } else if (props.page == "Log Out") {
            return "/register";
        }

        let pageName = props.page;
        pageName = "/" + String(pageName).toLowerCase();

        return pageName;
    }

    return (
        <div
            className={props.style}
        >
            <Link
                to={givePage()}
                className="pages-settings"
                //onClick={() => (alert("" + props.page))}
            >
                {props.page}
            </Link>
        </div>
    );
}

const MenuButton = () => {
    return (
        <h2
            className="logo menu"
            onClick={() => {alert("hi there!")}}
            onMouseEnter={() => {alert("ok getting here!")}}
        >
          MENU  
        </h2>
    );
}

const InputField = (props) => {
    return (
        <div>
            <input className="input-field" id={props.name} type="text" placeholder={props.name}/>
        </div>
    );
}

const SubmitButton = () => {
    return (
        <div>
            <button
                className="submit-button login"
                type="button"
                onClick={() => alert("hi")}
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

export default Menu;