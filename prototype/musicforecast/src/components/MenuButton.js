import { Link } from "react-router-dom";

const MenuButton = () => {
    // function circleShow() {
    //     const circleDiv = document.getElementById("circle");
    //     circleDiv.style.opacity = ".5";
    //     circleDiv.style.width = "160px";
    //     circleDiv.style.height = "100px";
    // }

    // function circleHide() {
    //     const circleDiv = document.getElementById("circle");
    //     circleDiv.style.opacity = "0";
    //     circleDiv.style.width = "25px";
    //     circleDiv.style.height = "25px"
    // }

    return (
        <Link
            to={"/menu"}
            className="logo menu"
            // onClick={() => {alert("hi there!")}}
            // onMouseEnter={() => {circleShow()}}
            // onMouseLeave={() => {circleHide()}}
        >
          MENU
            {/* <div
                className="circle-animation"
                id="circle"
                hidden={true}
            >
            </div>   */}
        </Link>
    );
}

export default MenuButton;