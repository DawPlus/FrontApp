import React from "react";
import Aux from "../../hoc/_Aux";
import { withRouter } from 'react-router-dom';
import {Row, Col, Card, Form} from 'react-bootstrap';
import Info from "../../App/layout/Question/Info";
// import Hint from "../../App/layout/Question/Hint";
// import Map from "../../App/layout/Question/Map";
import MapImage from "../../App/layout/Question/MapImage";
import HintImage from "../../App/layout/Question/HintImage";
import Files from "../../App/layout/Question/Files";
import Toggle from "../../App/layout/Question/Toggle";
import Example from "../../App/layout/Question/Example";
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
                                        <Form>
                                            <Info/>
                                            <Files/>
                                        </Form>
                                        <hr/>
                                        <Example/>
                                    </Col>
                                    <Col md={4}>

                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">Map</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <MapImage/>
                                        </Card.Body>
                                    </Card>


                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">Hint</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <HintImage/>
                                        </Card.Body>
                                    </Card>


                                    
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