import React from "react";
import Aux from "../../hoc/_Aux";
import { withRouter } from 'react-router-dom';
import {Row, Col, Card} from 'react-bootstrap';
import Info from "../../App/layout/Question/new/info";
import Images from "../../App/layout/Question/new/images";
import Toggle from "../../App/layout/Question/new/toggle";
import Answer from "../../App/layout/Question/new/answer";
import Button from '@material-ui/core/Button';
const ListPage = ({match, history}) =>{
    return (<>
             <Aux>
                <Row id="regForm">
                    <Col md={9}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">문제작성</Card.Title>
                                <Toggle/>
                            </Card.Header>
                            <Card.Body>
                               <Info/>
                               <Answer/>
                               <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Card.Body>
                            
                        </Card>
                        <Card>
                           
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Images/>
                    </Col>
                </Row>
            </Aux>
    </>);


}
export default withRouter(ListPage);