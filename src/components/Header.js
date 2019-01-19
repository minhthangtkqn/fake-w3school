import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand" href="localhost:4200">HOME</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="localhost:4200">Trang chu</a>
                        </li>
                        <li>
                            <a href="localhost:4200">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;