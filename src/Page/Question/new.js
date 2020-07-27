import React from "react";
import Aux from "../../hoc/_Aux";
import { withRouter } from 'react-router-dom';
import {Row, Col, Card} from 'react-bootstrap';
import Info from "../../App/layout/Question/Info";
// import Hint from "../../App/layout/Question/Hint";
// import Map from "../../App/layout/Question/Map";
import Images from "../../App/layout/Question/Images";

import Toggle from "../../App/layout/Question/Toggle";
import Answer from "../../App/layout/Question/Answer";
import Button from '@material-ui/core/Button';




const ListPage = ({match, history}) =>{
    return (<>
             <Aux>
                <Row id="regFor111">
                    <Col >  
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">문제작성</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Form controls
                                    <Toggle/>
                                </h5>
                                <hr/>
                                <Row>
                                    <Col md={8}>
                                        <Info/>
                                        <hr/>
                                        <Answer/>
                                    </Col>
                                    <Col md={4}>
                                        <Images/>
                                    </Col>
                                </Row>
                               <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
    </>);


}
export default withRouter(ListPage);