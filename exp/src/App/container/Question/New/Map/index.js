import React from 'react'

import { Row,  Col} from 'react-bootstrap';
import ImageViewer from "../../../../components/ImageViewer";

const MapContainer = () => {


    return(<>
          <Row>
            <Col>
            <div class="position-relative form-group">
                <label for="exampleSelect" class="">Select</label>
                <select name="select" id="exampleSelect" class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            </Col>
                
        </Row>
        <Row>
            <Col>
            <ImageViewer src={null}/>
            </Col>
        </Row>
    
    </>);
}
export default MapContainer;