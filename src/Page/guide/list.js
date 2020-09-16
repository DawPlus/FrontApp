import React from 'react'
import Title from "../../App/container/Guide/Title";
import Uploader from "../../App/container/Guide/Uploader";
import ImageList from "../../App/container/Guide/List";
import {Row, Col, Card} from 'react-bootstrap';

const GuidePage = () => {

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
export default GuidePage;