import React from "react";
import Aux from "../../hoc/_Aux";
import {Row, Col, Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import QuestionList from "../../App/layout/Question/list";
const ListPage = ({match, history}) =>{

    const onClick= ()=>{      
        history.push(`${match.path}/new`);
    }
    return (<>
          <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Question List</Card.Title>
                                <Button variant="contained" color="primary" onClick={onClick}>
                                    신규작성
                                </Button>
                                <span className="d-block m-t-5"><code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <QuestionList/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
    </>);


}
export default withRouter(ListPage);