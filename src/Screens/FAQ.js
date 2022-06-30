import * as React from 'react';
import {section, small, Container, img, Image, Button, Accordion} from "react-bootstrap";
import HeaderImage from "./headerImage.jpg";


export default function AboutScreen() {
    return (
        <div>
            <section className="bg-light">
                <div className="container-fluid">
                    <Image src={HeaderImage} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                    <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Frequently Asked Questions</mark>
                </div> 
                <section class="ms-5 me-5 pt-5 bg-white">
                    <div class="accordion " id="FaqAccordion">
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    Q : I don't want to play competitively but I also don't want to play in the recreational league. Is there something in the middle?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                   a : In a situation like this we suggest you join the competitive league anyway as there is oppurtunity to play without being overly competitive.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                    Q : Who will be coaching me?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                    A : Each coach focuses on one program. So it depends on which program you register for. You can find more on this on the "About" page.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                    Q : How many practices does each program have per week?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                    A : Each program has a different amount of practices per week. This info can be found on the "Programs" page.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                    Q : How much do the programs cost?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                    A : On the "Programs" page you will find a desciption of each program we offer and in the description you will also find the price of the program.
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="me-5 ms-5">
                        <input type="text" class="form-control p-3 " placeholder="Ask your questions here (Add an email as well)" name="name"></input>
                    </div>
                    <br/>
                    <Button className="text-muted h6 ms-5 rounded float-right">
                        <p className="text-white align-middle">Submit</p>
                    </Button>
                    <br/>
                    <br/>
                </section>
            </section>
        </div>
    )
}