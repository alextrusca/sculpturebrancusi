import React, {Component} from 'react';
import works from '../../js/works.js'

class SectionExhibition extends Component {

    state = {
        works: works
    };

    nextElement = ev => {
        ev.preventDefault();
        const {works} = this.state;
        for(let i = 0; i < works.length; i++){
            let newIndex;
            if(works[i].htmlActive === 'active') {
                if(i + 1 >= works.length){
                    newIndex = 0;
                } else {
                    newIndex = i + 1;
                }
                works[i].htmlActive = '';
                console.log(newIndex);
                works[newIndex].htmlActive = 'active';
                break;
            }
        }
        this.setState({works});
    };

    prevElement = ev => {
        ev.preventDefault();
        const {works} = this.state;
        for(let i = 0; i < works.length; i++){
            let newIndex;
            if(works[i].htmlActive === 'active') {
                if(i - 1 < 0){
                    newIndex = works.length - 1;
                } else {
                    newIndex = i - 1;
                }
                works[i].htmlActive = '';
                console.log(newIndex);
                works[newIndex].htmlActive = 'active';
                break;
            }
        }
        this.setState({works});
    };



    render() {
        const {works} = this.state;
        return (
            <section id="exhibition" className="dark">
                <div className="center exhibition">
                    <h2>Some sculptures by Brancusi</h2>
                    {works.map((element, index) => {
                        return(
                            <>
                            <div className="slider">
                              <div className={`slide ` + element.htmlActive} key={index.toString()} >
                                  <div className="box">
                                    <div className="box_img">
                                        <img src={element.img} alt={element.alt} />
                                    </div>
                                    <div className="box_content">
                                        <div>
                                            <h2>{element.title}</h2>
                                            <h3>{element.subtitle}</h3>
                                        </div>
                                        <p>{element.description}</p>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div id="prev" onClick={this.prevElement}>
                                <h2><a href="#">&larr;</a></h2>
                                <a href="#">Prev</a>
                            </div>
                            <div id="next" onClick={this.nextElement}>
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

export default SectionExhibition;