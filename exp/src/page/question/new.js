import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Info from "../../App/container/Question/New/Info";
import Title from "../../App/container/Question/Title";
import Toggle from "../../App/container/Question/New/Toggle";
import Example from "../../App/container/Question/New/Example";
import Map from "../../App/container/Question/New/Map";
import Video from "../../App/container/Question/New/Video"
const NewPage = ()=>{
    return(<>
        <Title/>
        <Toggle/>
        <Row>
            <Col>
                <div class="main-card mb-3 card">
                    <div class="card-body">
                            <h5 class="card-title">Info</h5>
                            <div class="divider"></div>
                            <Info/>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="main-card mb-3 card">
                    <div class="card-body">
                            <h5 class="card-title">Example</h5>
                            <div class="divider"></div>
                            <Example/>
                    </div>
                </div>    
            </Col>
        </Row>

        <Row>
            <Col md={4}>
                <div class="main-card mb-3 card">
                    <div class="card-body">
                            <h5 class="card-title">MAP</h5>
                            <div class="divider"></div>
                            <Map/>
                    </div>
                </div>    
            </Col>

            <Col md={4}>
                <div class="main-card mb-3 card">
                    <div class="card-body">
                            <h5 class="card-title">GUIDE</h5>
                            <div class="divider"></div>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div class="main-card mb-3 card">
                    <div class="card-body">
                            <h5 class="card-title">Video</h5>
                            <div class="divider"></div>
                            <Video/>
                    </div>
                </div>
            </Col>
        </Row>

    </>);
}
export default NewPage;