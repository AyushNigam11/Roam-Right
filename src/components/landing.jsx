import React from "react";
import image from "../assets/2.png";
import logo from "../assets/GO.png";
import Button from "react-bootstrap/Button";
import './landing.css';

import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root": {
            borderRadius: 20, // Adjust the value as needed
        },
        "& .MuiOutlinedInput-input": {
            padding: "10px 14px", // Adjust the padding as needed
        },
    },
}));

const SearchField = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
                style={{ height: "50px", width: "400px", backgroundColor: "white" }}
            />
        </div>
    );
};

function Landing() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                overflowX: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    height: "70vh",
                    overflow: "hidden",
                    flexDirection: "column",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <div style={{ width: "85%", display: "flex" }}>
                        <img
                            src={logo}
                            style={{
                                width: "17%",
                                height: "100%",
                                marginLeft: "50px",
                                marginTop: "-25px",
                            }}
                        />
                    </div>
                    <div style={{ width: "15%", display: "flex", filter: "blur(0px)" }}>
                        {/* <Button
                            variant="primary"
                            style={{
                                paddingTop: "",
                                backgroundColor: "#3e4044",
                                borderRadius: "20px",
                                width: "50%",
                                maxHeight: "45px",
                                marginTop: "50px",
                                color: "white",
                                marginLeft: "70px",
                                maxWidth: "90px",
                            }}
                        >
                            Login
                        </Button> */}
                        <button className="button-2" style={{
                                paddingTop: "",
                                backgroundColor: "#3e4044",
                                borderRadius: "20px",
                                width: "50%",
                                maxHeight: "45px",
                                marginTop: "50px",
                                color: "white",
                                marginLeft: "70px",
                                maxWidth: "100px",
                                
                            }}>
                            <span style={{fontWeight:"bold"}}>
                        LOGIN</span>
                        </button>
                    </div>
                </div>
                <div class="searchBox" style={{ marginLeft: "480px", marginTop: "60px" }}>

                    <input class="searchInput" type="text" name="" placeholder="Search Destination" />
                    <button class="searchButton" href="#">



                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <g clip-path="url(#clip0_2_17)">
                                <g filter="url(#filter0_d_2_17)">
                                    <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                    <feOffset dy="4"></feOffset>
                                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                                </filter>
                                <clipPath id="clip0_2_17">
                                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                                </clipPath>
                            </defs>
                        </svg>


                    </button>
                </div>




            </div>
            <div style={{ display: "flex", height: "30vh", backgroundColor: "#d9d9d9", flexDirection: "column" }}>
                <div></div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>owenifwef</div>
                    <div>weufhgiuwge</div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
