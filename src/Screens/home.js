import * as React from 'react';
import {section, small, Container, img, Image, Button} from "react-bootstrap";
import HeaderImage from "./headerImage.jpg";
import program from "./ProgramsImg.jpg";
import coach from "./CoachImg.jpg";
import faq from "./FAQImg.jpg";
import register from "./RegisterImg.jpeg";

export default function AboutScreen() {
    return (
        <div>
            <section className="bg-light">
                <div className="container-fluid">
                    <Image src={HeaderImage} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                    <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Join The Club Today</mark>
                </div>
                <section class="ms-5 me-5 mt-2">
                    <div class="container-fluid">
                        <div className="row">
                            <div class="col p-3  bg-white text-center">
                                <Image src={program} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                <h3>Programs:</h3>
                                <h3 className="text-muted">See what program is perfect for you!</h3>
                            </div>
                            <div class="col p-3 ms-3 bg-white text-center">
                                <Image src={coach} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                <h3>About:</h3>
                                <h3 className="text-muted">Learn more about our </h3>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div class="col p-3  bg-white text-center">
                                <Image src={faq} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                <h3>FAQ:</h3>
                                <h3 className="text-muted">Have questions or comments? Find the answers here</h3>
                            </div>
                            <div class="col p-3 ms-3 bg-white text-center">
                                <Image src={register} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                                <h3>Regostration:</h3>
                                <h3 className="text-muted">Register for the program of your choice by following a few easy steps</h3>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </section>
            </section>
        </div>
    )
}