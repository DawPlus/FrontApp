import React  from "react";

import { Card} from 'react-bootstrap';
import Images from "../../../components/ImageViewer";
import { useSelector } from "react-redux";

const ImageContainer = () => {
    
    const { mapImage, hintImage} = useSelector(state => state.question);

  
    return(<>
       <Card>
            <Card.Header>
                <Card.Title as="h5">Map</Card.Title>
            </Card.Header>
            <Card.Body>
                <Images src={mapImage} alt="map"/>
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                <Card.Title as="h5">Hint</Card.Title>
            </Card.Header>
            <Card.Body>
            <   Images src={hintImage} alt="map"/>
            </Card.Body>
        </Card>
    
    
    
    </>);
}
export default ImageContainer;