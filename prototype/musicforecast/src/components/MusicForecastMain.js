import "../Pages/Styles/MusicMain.css";
import { useState } from "react";

const MusicForecastMain = () => {
    return (
        <div>
            <h1
                className="large-logo music-logo"
            >
                Music
            </h1>
            <h1
                className="large-logo forecast-logo"
            >
                &emsp;&emsp; Forecast
            </h1>
            <h4
                className="explanation"
            >
                What is the first thing that comes to mind when you 
                see the word forecast? A weather forecast? That's right.
                That's how we came up with Music Forecast, which is designed to 
                recommend songs to users based on their current weather. <br/>
                <br/>The application has two options for sending songs in response to the
                current temperature and weather.
            </h4>
            <div
                className="main-text-about"
            >   
                <div
                    className="vibes"
                >
                    <h4
                        className="vibing"
                    >
                    OPPOSITE VIBE:<br/>
                    If the day's cold, it might give users some cozy-feeling songs
                    </h4> 
                </div>
                <div
                    className="vibes"
                >
                    <h4
                         className="vibing"
                    >
                        CORRELATED SONGS:<br/>
                        If instead it's rainy, there will be songs about rain, melancholy, etc.
                    </h4>
                </div>
            </div>
            <h4
                className="explanation end"
            >
                You can simply just listen to the music that matches the ambiance
                and enjoy it. Yet, if you feel terrible because of the freezing days or 
                thunderstorms, turn on correlated songs mode and enjoy songs recommended 
                by the application :{')'}
            </h4>
            <PlayButton/>
        </div>
    );
}

const PlayButton = () => {
    const [weather, setWeather] = useState("none");
    let crd = "";

    function playMusic() {

    }

    function callAPI(lat, long) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon=' +
        long+'&exclude=hourly,daily,minutely,alerts&appid=65d0542522796e00863067559407625b')
        request.send();
        request.onload = () => {
            let weather = JSON.parse(request.response);
            weather = JSON.stringify(weather["current"]["weather"]);
            let current = String(weather).split(",")[1].split(":")[1].replace(/"/g, "").toLowerCase();
            setWeather(current);
        }
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        crd = pos.coords;
        
        callAPI(parseFloat(crd.latitude).toFixed(2), parseFloat(crd.longitude).toFixed(2));
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function alertPos() {
        const thisVar = navigator.geolocation.getCurrentPosition(success, error, options);
        alert("Hi there!");
    }

    return (
        <div>
            <button
                className="submit-button"
                type="button"
                onClick={() => {alertPos()}}
            >
                Play
            </button>
            <h3
            
            >
                {"Playing songs with a " + weather + " vibe."}
            </h3>
        </div>
    );
}

export default MusicForecastMain;