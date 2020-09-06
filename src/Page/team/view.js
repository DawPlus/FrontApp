import React from 'react'
import Title from "../../App/container/Team/Title";
import {Card} from 'react-bootstrap';
import View from "../../App/container/Screenshot";
const MapPage = () => {

    return(<>
          <Title/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">스크린샷 관리</Card.Title>
                </Card.Header>
                <Card.Body>
                        <View/>
                </Card.Body>
            </Card>
    </>);
}
export default MapPage;