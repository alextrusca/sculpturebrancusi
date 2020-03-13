import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
    state = {
        burger: true
    };
    render() {
        const forBurger = this.state.burger === false ? 'burger' : '';
        return (
            <nav className="center">
                <div className="name">
                    <h2>CONSTANTIN</h2>
                    <h2>BRÂNCUȘI</h2>
                </div>
                <div onClick={() => {this.setState({burger: false}) }}  className={`burger__menu ` + forBurger} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/*<div className='none, burger' >*/}
                {/*    <li><a href="#visit">Visit</a></li>*/}
                {/*    <li><a href="#exhibition">Exhibition</a></li>*/}
                {/*    <li><a href="#events">Events</a></li>*/}
                {/*    <li><a href="#learn">Learn</a></li>*/}
                {/*</div>*/}
                <ul className={`menu ` + forBurger}>
                    <li><a href="#visit">Visit</a></li>
                    <li><a href="#exhibition">Exhibition</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#learn">Learn</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;