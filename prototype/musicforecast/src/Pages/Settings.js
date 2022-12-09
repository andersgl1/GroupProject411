import React, { useState } from "react";
import "./Styles/Settings.css";
import MenuButton from "../components/MenuButton";

class Settings extends React.Component {
    render() {
        return (
            <body
                id="settings-body"
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
                <h2
                    className="settings-label"
                >
                    SETTINGS
                </h2>
                <div
                    className="box-settings"
                >
                    <SettingsComponent
                        text="Theme"
                        default="Light"
                        option="Dark"
                    />
                    <SettingsComponent
                        text="Mode"
                        default="Correlated"
                        option="Uncorrelated"
                    />
                    <SettingsComponent
                        text="Spotify"
                        default="Link"
                        option="Unlink"
                    />
                    <SettingsComponent
                        text="Location"
                        default="On"
                        option="Off"
                    />
                </div>
                
            </body>
        );
    }
}

const SettingsComponent = (props) => {
    const [setting, setSetting] = useState(props.default);

    function handleClick() {
        if (setting == props.default) {
            setSetting(props.option);
        } else {
            setSetting(props.default);
        }
    }

    function handleLink() {
        alert("linking!")
    }

    return (
        <div
            className="left-component"
        >
            <h3
                className="text-settings"
            >
                {props.text}
            </h3>
            <div
                className="alignment-buttons-settings"
            >

                <button
                    type="button"
                    className={"button-settings " + props.text}
                    onClick={() => {handleClick()}}
                >
                    {setting}
                </button>
            </div>
        </div>
    );
}

export default Settings;