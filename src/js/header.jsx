import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from "./header_nav.jsx";
import HeaderContent from "./header_content.jsx";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="dark">
                   <Nav />
                   <HeaderContent />
                </div>
            </header>
        )
    }
}

document.addEventListener("DOMContentLoaded",function () {

    ReactDOM.render(
        <Header />,
        document.getElementById('app')
    )
});

export default Header;