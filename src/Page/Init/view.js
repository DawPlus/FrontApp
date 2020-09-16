import React from 'react'
import View from "../../App/container/Init/View/Info";
import Title from "../../App/container/Init/Title";
import {Card} from 'react-bootstrap';
const SelectPage = () => {
    
return(<>     
            <div className="animated animate__fadeInUp faster">
                <Title/>
            </div>
            <Card className="animated animate__fadeInUp delay-1">
                <Card.Header>
                    <Card.Title as="h5">API 상세보기</Card.Title>
                </Card.Header>
                <Card.Body>
              
                <View/>
                 
                </Card.Body>
            </Card>
        
    

</>);


}
export default SelectPage;