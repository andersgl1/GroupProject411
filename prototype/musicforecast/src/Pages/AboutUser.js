import React from "react";
import MusicForecastMain from "../components/MusicForecastMain";
import "./Styles/MusicMain.css";
import MenuButton from "../components/MenuButton";

class AboutUser extends React.Component {
    render() {
        return (
            <body
                id="body-about"
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
                <MusicForecastMain/>
            </body>
        );
    }
}


export default AboutUser;