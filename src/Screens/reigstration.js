import * as React from 'react';
import {section, tab, Tab, form, Form, small, Container, img, Image, Button, Accordion} from "react-bootstrap";
import HeaderImage from "./headerImage.jpg";

export default function AboutScreen() {
    return (
        <div>
            <section className="bg-light">
                <div className="container-fluid">
                    <Image src={HeaderImage} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                    <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Registration</mark>
                </div> 
                <section class="ms-5 me-5 pt-5 bg-white">
                    
                    
                    <div className="nav nav-tabs nav-pills nav-fill" id="nav-tab" role="tablist">
                        <a className="nav-link active" data-toggle="tab" id="step1" href="#step1">Step 1</a>
                        <a className="nav-link" data-toggle="tab" id="step2" href="#step2">Step 2</a>
                        <a className="nav-link" data-toggle="tab" id="step3" href="#step3">Step 3</a>
                        <a className="nav-link" data-toggle="tab" id="step4" href="#step4">Step 4</a>
                    </div>
                    
                    <div className="tab-content py-4" id="nav-tabContent">
                        <div id="step1" className="tab-pane fade show active">
                            <h4>The Functionality of this feature is not made yet.</h4>
                            Step 1 is "Select Program"
                            <br/>
                            Step 2 is "Pick Availability". Which contains a calendar to pick dates you are available for
                            <br/>
                            Step 3 is "Personal Information"
                            <br/>
                            Step 4 is "Payment Info"
                        </div>
                        <div id="step2" className="tab-pane fade">
                            <h4>Step 2</h4>
                            
                        </div>
                        <div id="step3" className="tab-pane fade">
                            <h4>Step 3</h4>
                            
                        </div>
                        <div id="step4" className="tab-pane fade">
                            <h4>Step 4</h4>
                            
                        </div>
                    </div>
                    <div className="row justify-content-between">
                    <div className="col-auto"><button type="button" class="btn btn-secondary" data-enchanter="previous">Previous</button></div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary" data-enchanter="next">Next</button>
                        <button type="submit" className="btn btn-primary ms-2" data-enchanter="finish" data-bs-toggle="modal" data-bs-target="#modal1">Finish</button>
                    </div>
                    </div>

                    <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title text-center" id="exampleModalLabel">Appointment Confirmed</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              You are now registered
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
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
