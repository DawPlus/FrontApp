import React from 'react'
import Title from "../../App/container/Map/Title";
import Uploader from "../../App/container/Map/Uploader";
import ImageList from "../../App/container/Map/List";
//import ImageList from "../../App/components/ImageList";
import {Card} from 'react-bootstrap';

const MapPage = () => {

    return(<>
          <Title/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">지도관리</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Uploader/>
                    <ImageList/>
                </Card.Body>
            </Card>
    </>);
}
export default MapPage;