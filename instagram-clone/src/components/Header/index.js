import React from 'react';
import "./Header.css";

class Header extends React.Component {
    render(){
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/"> 
                            Instragram
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;