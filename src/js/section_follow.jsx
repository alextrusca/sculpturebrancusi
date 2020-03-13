import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SectionFollow extends Component {
    render() {
        return (
            <section className="follow dark">
                <div className="center ">
                    <div className="follow_content">
                        <h2>Stay in touch</h2>
                        <h5>tel: 22222222222</h5>
                        <p>Kensington High Street, London</p>
                        <p id="email">question@sculptmuseum.com</p>
                        <div id="icon">
                            <a href="https://www.instagram.com/accounts/login/?next=" className="fa fa-instagram"></a>
                            <a href="https://twitter.com/?lang=ro" className="fa fa-twitter"></a>
                            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                        </div>
                        <form action="">
                            <input type="email" placeholder="Enter email for newsletter"/>
                        </form>
                        <a href="#" onClick={event => event.preventDefault()}>Subscribe</a>
                    </div>
                    <img src="./assets/images/glob.jpg" alt="earth" />
                </div>
            </section>
        )
    }
}

export default SectionFollow;