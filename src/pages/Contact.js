import React from 'react';
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import '../styles/contact.scss';
import Footer from "../components/Footer/Footer";

const Contact = () => {
    return (
        <div className="contact">
            <header className="contact-header">
                <Logo />
                <Navigation />
            </header>
            <div className="contact-body">
                <div className="contact-info">
                    <h2>
                        Napisz do nas!
                    </h2>
                    <h3>Email:</h3>
                    <p>gdziezjesc@coderslab.com</p>
                    <h3>Telefon:</h3>
                    <p>+48 753 543 432</p>
                    <h3>Adres:</h3>
                    <p>ul. Dąbrowskiego 23/5 61-325 Poznań</p>

                </div>
                <div className="contact-image"/>
            </div>
            <div className="contact-footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Contact;