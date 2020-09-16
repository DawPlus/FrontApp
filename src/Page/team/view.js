import React from 'react'
import Title from "../../App/container/Team/Title";
import {Card, Row, Col} from 'react-bootstrap';
import Info from "../../App/container/Screenshot/info";
import ScreenShot from "../../App/container/Screenshot/screenshot";
import Buttons from "../../App/container/Screenshot/buttons";
const MapPage = () => {

    return(<>
          <div div className="animated animate__fadeInUp faster">
                <Title/>
            </div>
            <div div className="animated animate__fadeInUp delay-1">
                <Buttons/>
            </div>
            <Row className="animated animate__fadeInUp delay-1">
                <Col md={4}>
                    <Card >
                        <Card.Body>     
                                <Info/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                                <ScreenShot/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </>);
}
export default MapPage;