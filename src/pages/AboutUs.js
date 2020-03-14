import React from 'react';
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import '../styles/aboutus.scss'

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <header className="aboutUs-header">
                <Logo />
                <Navigation />
            </header>
            <div className="aboutUs-body">
                    <div className="aboutUs-image"></div>
                    <div className="aboutUs-social">
                        <div className="aboutUs-youtube">
                            <div className="aboutUs-youtube-image"></div>
                            <div className="aboutUs-youtube-text">Chcesz zobaczyć recenzje najlepszych knajp w okolicy? Pragniesz znaleźć się w pięknych miejscach i rozkoszować się rozpływającym się w oczach jedzeniem? Wszystko to oraz wiele innych znajdziesz na naszym kanale Youtube'wym.</div>
                        </div>
                        <div className="aboutUs-facebook">
                            <div className="aboutUs-facebook-image"></div>
                            <div className="aboutUs-facebook-text">Chcesz zobaczyć recenzje najlepszych knajp w okolicy? Pragniesz znaleźć się w pięknych miejscach i rozkoszować się rozpływającym się w oczach jedzeniem? Wszystko to oraz wiele innych znajdziesz na naszym profilu na FB.</div>
                        </div>
                        <div className="aboutUs-instagram">
                            <div className="aboutUs-instagram-image"></div>
                            <div className="aboutUs-instagram-text">Chcesz zobaczyć recenzje najlepszych knajp w okolicy? Pragniesz znaleźć się w pięknych miejscach i rozkoszować się rozpływającym się w oczach jedzeniem? Wszystko to oraz wiele innych znajdziesz na naszym profilu Insta.</div>
                        </div>
                    </div>
                <div className="aboutUs-firstInfo">
                    <div className="aboutUs-firstInfo-text">
                        <div className="aboutUs-firstInfo-text-h1">Najlepsze restauracje w okolicy!</div>
                        <div className="aboutUs-firstInfo-text-p">Przyświeca nam jedna idea! Zabrać Cię po najlepszym jedzeniu jakie jest dla Ciebie dostępne podczas Twojego kursu w CodersLab Poznań. Wszystkie miejsca zostały przez nas sprawdzone oraz ocenione, więc nie zawiedziesz się!</div>
                    </div>
                    <div className="aboutUs-firstInfo-bg">
                        <div className="aboutUs-firstInfo-img"></div>
                    </div>
                </div>
                <div className="aboutUs-secondInfo">
                    <div className="aboutUs-secondInfo-bg">
                        <div className="aboutUs-secondInfo-img"></div>
                    </div>
                    <div className="aboutUs-secondInfo-text">
                        <div className="aboutUs-secondInfo-text-h1">Najlepsze restauracje w okolicy!</div>
                        <div className="aboutUs-secondInfo-text-p">Przyświeca nam jedna idea! Zabrać Cię po najlepszym jedzeniu jakie jest dla Ciebie dostępne podczas Twojego kursu w CodersLab Poznań. Wszystkie miejsca zostały przez nas sprawdzone oraz ocenione, więc nie zawiedziesz się!</div>
                    </div>
                </div>
                <div className="aboutUs-thirdInfo">
                    <div className="aboutUs-thirdInfo-text">
                        <div className="aboutUs-thirdInfo-text-h1">Najlepsze restauracje w okolicy!</div>
                        <div className="aboutUs-thirdInfo-text-p">Przyświeca nam jedna idea! Zabrać Cię po najlepszym jedzeniu jakie jest dla Ciebie dostępne podczas Twojego kursu w CodersLab Poznań. Wszystkie miejsca zostały przez nas sprawdzone oraz ocenione, więc nie zawiedziesz się!</div>
                    </div>
                    <div className="aboutUs-thirdInfo-bg">
                        <div className="aboutUs-thirdInfo-img"></div>
                    </div>
                </div>

            </div>
            <div className="aboutUs-footer">
                <Footer/>
            </div>
        </div>
    );
};

export default AboutUs;