import React from "react";
import {Row, Col, Card} from 'react-bootstrap';

import TableContainer from "../../App/container/Init/Table";
import {withRouter} from "react-router-dom"
import Title from "../../App/container/Init/Title";

const APIListPage = ({history, match}) => {
 
    return(<>
           <Title/>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">API 목록</Card.Title>
                            {/* <span className="d-block m-t-5">API 목록 관리 수행 </span> */}
                        </Card.Header>
                        <Card.Body>
                            <TableContainer/>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
       
    </>);
}
export default withRouter(APIListPage);