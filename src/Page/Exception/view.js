import React from 'react'
import Title from "../../App/container/Exception/Title"
import Views from "../../App/container/Exception/View"

import {Card} from 'react-bootstrap';
const ViewPage = () => {


    return(<>
    
        <div className="animated animate__fadeInUp faster">
            <Title/>
        </div>
        <Card className="animated animate__fadeInUp delay-1">
                <Card.Header>
                    <Card.Title as="h5">Exception 상세보기</Card.Title>
                </Card.Header>
                <Card.Body>
              
                    <Views/>
                 
                </Card.Body>
            </Card>
        
    </>);
}
export default ViewPage;