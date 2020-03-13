import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./header.jsx";
import SectionExhibition from "./section_exhibition.jsx";
import SectionEvents from "./section_events.jsx";
import SectionFollow from "./section_follow.jsx";
import Footer from "./footer.jsx";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <SectionExhibition />
                <SectionEvents />
                <SectionFollow />
                <Footer />
            </>
        )
    }
}
document.addEventListener("DOMContentLoaded",function () {

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});

