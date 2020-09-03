import React from "react";
import {Card} from 'react-bootstrap';

import NewForm from "../../App/container/Init/NewForm";
import Title from "../../App/container/Init/Title";

const NewPage = () => {


    return(<>    
            <Title/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">API 신규등록</Card.Title>
                </Card.Header>
                <Card.Body>
              
                       <NewForm/>
                 
                </Card.Body>
            </Card>

    </>);

}
export default NewPage;