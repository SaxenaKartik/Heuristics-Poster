import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PosterContainer from './components/PosterContainer'
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <PosterContainer/>
        </div>
    );
}

export default App;
