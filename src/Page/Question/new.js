import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Info from "../../App/container/Question/New/Info";
import Title from "../../App/container/Question/Title";
import Toggle from "../../App/container/Question/New/Toggle";
import Example from "../../App/container/Question/New/Example";
import Map from "../../App/container/Question/New/Map";
import Guide from "../../App/container/Question/New/Guide";
import Video from "../../App/container/Question/New/Video";

import Buttons from "../../App/container/Question/New/Buttons";
const NewPage = ()=>{
    return(<>
        <Title/>
        <Toggle/>
        <Row>
            <Col md={6}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                            <h5 className="card-title">Info</h5>
                            <div className="divider"></div>
                            <Info/>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                            <h5 className="card-title">Example</h5>
                            <div className="divider"></div>
                            <Example/>
                    </div>
                </div>    
            </Col>
        </Row>

        <Row>
            <Col md={4}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                            <h5 className="card-title">MAP</h5>
                            <div className="divider"></div>
                            <Map/>
                    </div>
                </div>    
            </Col>

            <Col md={4}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                            <h5 className="card-title">GUIDE</h5>
                            <div className="divider"></div>
                            <Guide/>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                            <h5 className="card-title">Video</h5>
                            <div className="divider"></div>
                            <Video/>
                    </div>
                </div>
            </Col>
        </Row>
        <Row style={{marginBottom : "20px"}}>
            <Col>
                <Buttons/>
            </Col>
        </Row>

    </>);
}
export default NewPage;