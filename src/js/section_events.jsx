import React, {Component} from 'react';
import events from "../../js/events.js";

class SectionEvents extends Component {

    state = {
        events: events
    };
    nextEvent = ev => {
        ev.preventDefault();
        const {events} = this.state;
        for(let i = 0; i < events.length; i++){
            let newIndex;
            if(events[i].htmlActive === 'active') {
                if(i + 1 >= events.length){
                    newIndex = 0;
                } else {
                    newIndex = i + 1;
                }
                events[i].htmlActive = '';
                console.log(newIndex);
                events[newIndex].htmlActive = 'active';
                break;
            }
        }
        this.setState({events});
    };

    prevEvent = ev => {
        ev.preventDefault();
        const {events} = this.state;
        for(let i = 0; i < events.length; i++){
            let newIndex;
            if(events[i].htmlActive === 'active') {
                if(i - 1 < 0){
                    newIndex = events.length - 1;
                } else {
                    newIndex = i - 1;
                }
                events[i].htmlActive = '';
                console.log(newIndex);
                events[newIndex].htmlActive = 'active';
                break;
            }
        }
        this.setState({events});
    };

    render() {
        const {events} = this.state;
        return (
            <section id="events" className="dark">
                <div className="center exhibition events">
                    <p>explore art of sculpture with us</p>
                    <h2>Next events</h2>
                    {events.map((element, index) => {
                        return(
                            <>
                    <div className="slider">
                        <div className={`slide ` + element.htmlActive} >
                            <div className="box">
                                <div className="box_img">
                                    <img src={element.img} alt={element.alt} />
                                </div>
                                <div className="box_content">
                                    <h2>{element.event}</h2>
                                    <p>{element.description}</p>
                                    <div>
                                        <p>&#128336;{element.time}</p>
                                        <p>&#128197;{element.date}</p>
                                        <p>&#x1f4cc;{element.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="prev" onClick={this.prevEvent}>
                        <h2><a href="#">&larr;</a></h2>
                        <a href="#">Prev</a>
                    </div>
                    <div id="next" onClick={this.nextEvent}>
                        <h2><a href="#">&rarr;</a></h2>
                        <a href="#">Next</a>
                    </div>
                            </>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default SectionEvents;