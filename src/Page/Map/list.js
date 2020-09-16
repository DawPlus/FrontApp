import React from 'react'
import Title from "../../App/container/Map/Title";
import Uploader from "../../App/container/Map/Uploader";
import ImageList from "../../App/container/Map/List";
import {Row, Col, Card} from 'react-bootstrap';

const MapPage = () => {

    return(<>
            <div className="animated animate__fadeInUp faster">
                <Title/>
            </div>
            <Row className="animated animate__fadeInUp delay-1">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Uploader/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <ImageList/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </>);
}
export default MapPage;