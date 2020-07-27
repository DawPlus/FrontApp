import React from "react";
import {Row, Col, Card} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Aux from "../../hoc/_Aux";
import Table from "../../App/layout/Question/Table"
const ListPage = ({match, history}) =>{

    // 신규페이지 이동
    const onClick= ()=>{      
        history.push(`${match.path}/new`);
    }

    return (<>
    <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={onClick}
                                    style={{float : "right"}}
                                >
                                    신규작성
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Table/>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Aux>
    </>);


}
export default withRouter(ListPage);