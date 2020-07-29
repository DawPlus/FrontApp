import React, { useEffect } from "react";
import {Row, Col, Card,Form} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import {view, initialize} from "../../App/modules/question";
import { useDispatch } from "react-redux";

import Info from "../../App/layout/Question/Info"
import MapImage from "../../App/layout/Question/MapImage"
import HintImage from "../../App/layout/Question/HintImage"
import Example from "../../App/layout/Question/Example";
const ViewPage = ({match}) => {
    const {id} = match.params;
    const dispatch = useDispatch();
    

useEffect(()=>{
        dispatch(view(id));
    return()=>{
        dispatch(initialize());
        console.log("clear")

    };
},[dispatch, id]);

    return(<>
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">상세보기</Card.Title>
                            {/* <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span> */}
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Info disabled/>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">보기</Card.Title>
                            {/* <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span> */}
                        </Card.Header>
                        <Card.Body>
                            <Example/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Map</Card.Title>
                            {/* <span className="d-block m-t-5">use bootstrap <code>Taible</code> component</span> */}
                        </Card.Header>
                        <Card.Body>
                            <MapImage/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Hint</Card.Title>
                            {/* <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span> */}
                        </Card.Header>
                        <Card.Body>
                            <HintImage/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    </>);

}
export default withRouter(ViewPage);