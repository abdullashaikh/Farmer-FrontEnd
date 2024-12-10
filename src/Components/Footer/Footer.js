import React from "react";
import "./Footer.css";

/**
 * Footer component for the application.
 * Renders a footer section with logo, links, and contact information.
 */

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__left">
                    <h1>About Us</h1>
                    <img
                        src="https://s.tmimgcdn.com/scr/1200x750/180200/tractor-farm-logo-template_180278-original.png"
                        alt="Farm Connect-1 Logo"
                        className="footer__logo"
                    />

                </div>
                {/* <div className="footer__container__mid">
                    <div className="footer__container__mid__links">
                        <h2>Links</h2>
                     <ul>
                            <li>Home</li>
                            <li>Crops</li>
                            <li>Soil</li>
                            <li>News</li>
                        </ul> 
                    </div>
                </div> */}
                <div className="footer__container__right">
                    <div className="footer__container__right__authors">
                        <h2>Authors</h2>
                        <ul>
                            <li>
                                <a href="" target="_blank">Muhammad Shaikh</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© Agriculture Portal. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
