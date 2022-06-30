import * as React from 'react';
import {section, small, Container, img, Image, Button} from "react-bootstrap";
import HeaderImage from "./headerImage.jpg";
import User from "./UserImage.jpg";
import schedule from "./schedule.png";


export default function AboutScreen() {
    return (
        <section className="bg-light">
            <div className="container-fluid">
                <Image src={HeaderImage} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Video Guide / Coaches/ Schedule</mark>
            </div>     
            <section class="ms-5 me-5 bg-white p-5">               
                <div class="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-muted text-center text-danger">
                                <Image src={User} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                Coach 1
                            </h3>
                            <small className="text-muted h6">
                                Coaches the Recreational League
                            </small>
                        </div>
                        <div className="col">
                            <h3 className="text-muted text-center text-danger">
                                <Image src={User} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                Coach 2
                            </h3>
                            <small className="text-muted h6">
                                Coaches the U17 and U19 competitive programs
                            </small>
                        </div>
                        <div className="col">
                            <h3 className="text-muted text-center text-danger">
                                <Image src={User} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                Coach 3
                            </h3>
                            <small className="text-muted h6">
                                Coaches the Major League competitive program
                            </small>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 className="text-center text-danger">
                    Club Description and Guide to Picking Programs
                </h3>
                <br/>
                <iframe className="rounded mx-auto d-block" width="560" height="315" src="https://www.youtube.com/embed/g63LpPuDaxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 className="text-center text-danger">
                    Schedule
                </h3>
                <br/>
                <Image src={schedule} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
            </section>
        </section>
    )
}