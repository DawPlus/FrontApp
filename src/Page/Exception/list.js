import React from 'react'
import Title from "../../App/container/Exception/Title";
import List from "../../App/container/Exception/List";
import {Card} from 'react-bootstrap';

const ExceptionPage = () => {


    return(<>
    
        <div className="animated animate__fadeInUp faster">
            <Title/>
        </div>
        <Card className="animated animate__fadeInUp delay-1">
            <Card.Body>
                <List/>
            </Card.Body>
        </Card>
    
    
    </>);

}
export default ExceptionPage;