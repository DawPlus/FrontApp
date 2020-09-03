import React from 'react'
import {Card} from 'react-bootstrap';

import Title from "../../App/container/Question/Title";


const GuidePage = () => {

    return(<>
          <Title/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">문제관리</Card.Title>
                </Card.Header>
                <Card.Body>
                    
                    
                </Card.Body>
            </Card>
    </>);
}
export default GuidePage;