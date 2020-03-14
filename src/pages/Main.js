import React from 'react';
import Navigation from "../components/Navigation/Navigation"
import Logo from  "../components/Logo/Logo"
import SearchButton from "../components/Buttons/searchButton/SearchButton";
import RandomButton from "../components/Buttons/randomButton/RandomButton";
import '../styles/main.scss';

const Main = () => {
    return (
        <>
            <header className="main-header">
                <Logo />
                <Navigation />
            </header>
            <div className="main-body">
                <SearchButton />
                <RandomButton />
            </div>
        </>
    );
};

export default Main;