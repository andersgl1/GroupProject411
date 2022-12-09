import React, { useState } from "react";

class ButtonTesting extends React.Component {
   
        render() {
            let crd = "";

            function callAPI(lat, long) {
                var request = new XMLHttpRequest();
                request.open('GET', 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon=' +
                long+'&exclude=hourly,daily,minutely,alerts&appid=65d0542522796e00863067559407625b')
                request.send();
                request.onload = () => {
                    let weather = JSON.parse(request.response);
                    weather = JSON.stringify(weather);
                    alert("Hi there!" + weather);
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
                // let thisVar = navigator.geolocation.getCurrentPosition();
                // thisVar = String(thisVar);
                alert("Hi there!");
            }

            return (
                <div>
                    <button
                        type="button"
                        onMouseEnter={() => alertPos()}
                    >
                        HI there
                    </button>
                </div>
            );
        }
        
}

export default ButtonTesting;