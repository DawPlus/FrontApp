import React from 'react'
import Title from "../../App/container/Exception/Title";
import List from "../../App/container/Exception/List";
import {Card} from 'react-bootstrap';

const ExceptionPage = () => {


    return(<>
    
        <Title/>
        <Card>
            <Card.Body>
                <List/>
            </Card.Body>
        </Card>
    
    
    </>);

}
export default ExceptionPage;