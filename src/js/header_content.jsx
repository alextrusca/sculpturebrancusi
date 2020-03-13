import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HeaderContent extends Component{
    state = {
        active: true
    };



    render() {
        const className = this.state.active === false ? 'active' : '';
        return (
            <>
            <div className="center header__content" id="visit">
                <div className="about">
                    {/*<p>March 06, 2020 - Bus excursion</p>*/}
                    <h1>Exploring Old Architecture</h1>
                    <a id='more' href="#" onClick={() => {this.setState({active: false}) }}>Read more</a>
                    <div className={`more fullScreen ` + className} >
                        <div id='learn'>
                            <p>The definition of sculpture had quite literally been set in stone before
                                Brancusi. The world wasn’t prepared for his work because it looked nothing like
                                sculpture had for the last several hundred years.
                                Brancusi’s sculptures were less angelic, and perhaps seemed less impressive
                                because they didn’t show off the same technical chops. But this wasn’t because
                                Brancusi didn’t have the skills. He briefly apprenticed under French sculptor
                                Auguste Rodin, and early in his career, he was praised for his portrayals of
                                human anatomy. Brancusi’s early écorchés, or musculature studies, were so
                                masterful that they were exhibited at the Romanian Athenaeum in 1903.</p>
                            <a href='#' className="close" onClick={() => {this.setState({active: true}) }}>Close</a>
                        </div>
                    </div>
                </div>
                <img src="./assets/images/Constantin_Brancusi.jpg " alt="constantin_brancusi" />
            </div>
            </>
        )
    }
}

export default HeaderContent;