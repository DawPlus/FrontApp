import React from 'react'
import Title from "../../App/container/Exception/Title";
import List from "../../App/container/Exception/List";
import {Card} from 'react-bootstrap';

const ExceptionPage = () => {


    return(<>
    
        <Title/>
        <Card>
            <Card.Header>
                <Card.Title as="h5">Exception 목록</Card.Title>
                {/* <span className="d-block m-t-5">API 목록 관리 수행 </span> */}
            </Card.Header>
            <Card.Body>
                <List/>
            </Card.Body>
        </Card>
    
    
    
    
    
    
    
    
    
    
    
    
    </>);

}
export default ExceptionPage;