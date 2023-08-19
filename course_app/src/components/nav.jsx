import React from 'react'; // Make sure to import React
import './nav.css';

function Nav () {
    return (
        <section>
            <div className="nav_left">
                <div className="nav-link">
                    <a href='/'>Home </a>
                    <a href='/courses'>Market Place</a>
                    <a href='https://rougedoll.000webhostapp.com/index.php'>Forum</a>
                    <a href='/about'>About</a>
                </div>
            </div>
        </section>
    );
}

export default Nav; // Don't forget to export your component