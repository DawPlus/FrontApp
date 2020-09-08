import React from "react";
import ImageViewer from "../../../../components/ImageViewer";
import { useSelector } from "react-redux";
import {Card} from "react-bootstrap";
const GuideContainer = () => {
    const {guide} = useSelector(s => s.question.view);
    return(<>
          <Card>
            <Card.Body className="questionViewer">
                <h5 class="card-title">Guide</h5>
                <ImageViewer src={guide} />
            </Card.Body>
        </Card>
    </>);
}
export default GuideContainer;