import React from "react";
import {Row, Col, Card, Button} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import TableContainer from "../../App/layout/Init/Table";
import {withRouter} from "react-router-dom"
const APIListPage = ({history, match}) => {
    const onClick = () => {
        history.push(`${match.path}/new`);
    }
    return(<>
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">API 목록</Card.Title>
                                <span className="d-block m-t-5">API 목록 관리 수행 </span>
                                <Button variant="primary" onClick={onClick} size="sm" style={{float :"right"}}>
                                    New
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <TableContainer/>
                            </Card.Body>
                        </Card>
                       
                    </Col>
                </Row>
            </Aux>
    </>);
}
export default withRouter(APIListPage);