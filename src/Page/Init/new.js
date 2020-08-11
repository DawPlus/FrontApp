import React from "react";
import {Card} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import NewForm from "../../App/layout/Init/NewForm";


const NewPage = () => {


    return(<>    
        <Aux>  
            <Card>
                <Card.Header>
                    <Card.Title as="h5">API 신규등록</Card.Title>
                </Card.Header>
                <Card.Body>
              
                       <NewForm/>
                 
                </Card.Body>
            </Card>
        </Aux>
    </>);

}
export default NewPage;