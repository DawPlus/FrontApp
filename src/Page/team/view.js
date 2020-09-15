import React from 'react'
import Title from "../../App/container/Team/Title";
import {Card} from 'react-bootstrap';
import Info from "../../App/container/Screenshot/info";
import ScreenShot from "../../App/container/Screenshot/screenshot";
import Buttons from "../../App/container/Screenshot/buttons";
const MapPage = () => {

    return(<>
          <Title/>
          <Buttons/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">스크린샷 관리</Card.Title>
                </Card.Header>
                <Card.Body>
                        
                        <Info/>
                        <ScreenShot/>
                </Card.Body>
            </Card>
    </>);
}
export default MapPage;