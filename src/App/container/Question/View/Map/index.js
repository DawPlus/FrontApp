import React from "react";
import ImageViewer from "../../../../components/ImageViewer";
import { useSelector } from "react-redux";
import {Card} from "react-bootstrap";
const MapContainer = () => {
    const {map} = useSelector(s => s.question.view);
    return(<>
          <Card>
            <Card.Body className="questionViewer">
                <h5 class="card-title">Map</h5>
                <ImageViewer src={map} />
            </Card.Body>
        </Card>
    </>);
}
export default MapContainer;