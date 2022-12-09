import React from "react";
import "./Styles/Profile.css";
import MenuButton from "../components/MenuButton";

class Profile extends React.Component {
    render() {
        return (
            <body
                id="profile-body"
            >
                <MenuButton/>
                <ProfileCapture/>

            </body>
        );
    }
}

const ProfileCapture = (props) => {
    return (
        <div
            className="profile-box"
        >
            <h3
                className="profile-text"
            >
                PROFILE
            </h3>
            <div
                className="nickname-email-align"
            >
                <h4
                    className="nickname-text"
                >
                    Nickname: 
                </h4>
                <h4
                    className="nickname-text"
                >
                    Email Address: 
                </h4>
            </div>
        </div>
    );
}


// Do this later
const MyPlaylists = () => {
    return (
        <div>

        </div>
    );
}

export default Profile;