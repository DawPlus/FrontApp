import React from 'react'
import Title from "../../App/container/Team/Title";
import {Card} from 'react-bootstrap';
import Info from "../../App/container/Screenshot/info";
import ScreenShot from "../../App/container/Screenshot/screenshot";
const MapPage = () => {

    return(<>
          <Title/>
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