import React, { useState } from "react";
import image from "../assets/2.png";
import logo from "../assets/GO.png";
import card1 from "../assets/pexels-photo-3274551.jpeg";
import card2 from "../assets/pexels-photo-1320686.jpeg";
import card3 from "../assets/pexels-photo-2044434.jpeg";
import card4 from "../assets/pexels-photo-688576.jpeg";
import card5 from "../assets/pexels-photo-5303063.jpeg";
import card6 from "../assets/jj.jpeg";
import card7 from "../assets/pexels-chalta-phirta-307182428-20518303.jpg";
import card8 from "../assets/palace.jpg";
import card9 from "../assets/pexels-tauseefkhaliq-12750077.jpg";
import card10 from "../assets/pexels-qaarif-10999526.jpg";
import card11 from "../assets/pexels-yohantha-gunawarna-1265127381-24018492.jpg";
import card12 from "../assets/pexels-eartharchive-6501507.jpg";
import vid1 from "../assets/3018542-hd_1920_1080_24fps.mp4";
import vid2 from "../assets/mdv.mp4";
import app from "../assets/ss.png";
import app2 from "../assets/app.png";
import app3 from "../assets/download.png";
import flag from "../assets/flag.png";
import "./landing.css";
import { FaTrainSubway } from "react-icons/fa6";

function Landing() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseForm = () => {
        setShowLoginForm(false);
    };
    return (
        <div className="container">
            <div
                className="hero"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="navbar">
                    <img src={logo} alt="Logo" />
                    <div className="button-container" style={{display:'flex', gap:"20px"}}>
                       
                        <button1 className="button-3" style={{ fontFamily: 'kanit' }}><FaTrainSubway /> Check PNR</button1>
                        <button1 className="button-2" onClick={handleLoginClick} style={{ fontFamily: 'kanit' }}>Login</button1>
                        
                        {/* <button className="button-2" onClick={handleLoginClick}>
                            <span>LOGIN</span>
                        </button> */}
                    </div>
                </div>
                <div className="searchBox">
                    <input className="searchInput" type="text" placeholder="Search Destination" />
                    <button className="searchButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <g clipPath="url(#clip0_2_17)">
                                <g filter="url(#filter0_d_2_17)">
                                    <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
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
            {showLoginForm && (
                <div className="modal" style={{ display: showLoginForm ? "block" : "none" }}>
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseForm}>&times;</span>
                        <form className="form_container">
                            <div className="title_container">
                                <p className="title">Login to your Account</p>
                                <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
                            </div>
                            <br />
                            <div className="input_container">
                                <label className="input_label" htmlFor="email_field">Email</label>
                                <input placeholder="Enter your email" id="email_field" className="input_field" name="email" type="email" />
                            </div>
                            <div className="input_container">
                                <label className="input_label" htmlFor="password_field">Password</label>
                                <input placeholder="Enter your password" id="password_field" className="input_field" name="password" type="password" />
                            </div>
                            <button type="submit" className="sign-in_btn">Login</button>
                            <p className="signup_link">
                                Don’t have an account? <a href="/register">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", padding: "20px", }}>
                {/* <div style={{ fontWeight: "bold", fontFamily:'kanit', marginBottom: "20px", alignItems: "center", display: "flex", justifyContent: "center", fontSize: "30px", color: "#333333" }}><h1>Unlock Lesser-Known Wonders of World</h1></div> */}
                <div class="headline-container">
                    <img src={flag} alt="Indian Flag" class="flag" />
                    <h1 style={{ fontWeight: "bolder" }}>Famous Tourist Attraction</h1>
                    <img src={flag} alt="Indian Flag" class="flag" />
                </div>
                <div className="wishlist-items" style={{ fontFamily: 'kanit' }}>
                    {[
                        { src: card1, text: "TURKEY" },
                        { src: card5, text: "PAKISTAN" },
                        { src: card2, text: "MALDIVES" },
                        { src: card4, text: "INDIA" },
                        { src: card3, text: "DUBAI" },
                        { src: card6, text: "ISRAEL" }
                    ].map((card, index) => (
                        <div key={index} className="wishlist-item">
                            <img src={card.src} alt={card.text} className="wishlist-item-img" />
                            <div className="overlay">{card.text}</div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button1 className="view-offers-button" style={{ fontFamily: 'kanit' }}>View All Offers</button1>
                </div>
            </div>
            <div class="responsive-container">
                <div class="responsive-box box1">Content 1</div>
                <div class="responsive-box box2">Content 2</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: "20px", justifyContent: "center", alignItems: "center" }}>
                <div class="headline-container">
                    <img src={flag} alt="Indian Flag" class="flag" />
                    <h1 style={{ fontWeight: "bolder", whiteSpace: "nowrap" }}>Handpicked Collections For You</h1>
                    <img src={flag} alt="Indian Flag" class="flag" />
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30px", fontFamily: 'kanit' }}>
                    {[
                        { src: card7, text: "Varanasi" },
                        { src: card8, text: "Karnataka" },
                        { src: card9, text: "Jammu" },
                        { src: card10, text: "Kashmir" },
                        { src: card11, text: "Himachal" },
                        { src: card12, text: "Lucknow" }
                    ].map((card, index) => (
                        <div key={index} className="wishlist-item" style={{ flex: "0 0 calc(50% - 15px)" }}>
                            <img src={card.src} alt={card.text} className="wishlist-item-img" />
                            <div className="overlay">{card.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: "20px", }}>
                <div class="headline-container">
                    <img src={flag} alt="Indian Flag" class="flag" />
                    <h1 style={{ fontWeight: "bolder", whiteSpace: "nowrap" }}>Top Flight Routes</h1>
                    <img src={flag} alt="Indian Flag" class="flag" />
                </div>
                <div className="wishlist-items">
                    {[
                        { src: card1, text: "TURKEY" },
                        { src: card5, text: "PAKISTAN" },
                        { src: card2, text: "MALDIVES" },
                        { src: card4, text: "INDIA" },
                        { src: card3, text: "DUBAI" },
                        { src: card6, text: "ISRAEL" }
                    ].map((card, index) => (
                        <div key={index} className="wishlist-item">
                            <img src={card.src} alt={card.text} className="wishlist-item-img" />
                            <div className="overlay">{card.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer" style={{ display: "flex", flexDirection: "column", padding: "20px", height: "250px" }}>
                <div className="footer-inner" style={{ gap: "220px" }}>
                    <div className="footer-column"><img src={logo} alt="Logo" style={{ height: "150px", width: "100%", justifyItems: "left" }} /></div>

                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>Email: contact@gotravel.com</p>
                        <p>Phone: +91 7905 772707</p>
                    </div>
                    <div className="footer-column" style={{ marginLeft: "50px" }}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#" style={{ color: "white", fontWeight: "bolder" }}>Home</a></li>
                            <li><a href="#" style={{ color: "white", fontWeight: "bolder" }}>About Us</a></li>
                            <li><a href="#" style={{ color: "white", fontWeight: "bolder" }}>Services</a></li>
                            <li><a href="#" style={{ color: "white", fontWeight: "bolder" }}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <p>Stay connected on social media</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </footer>

        </div>
    );
}

export default Landing;
