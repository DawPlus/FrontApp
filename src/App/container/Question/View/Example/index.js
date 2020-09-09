import React from "react";
import Multi from "./Multi";
import Single from "./Single";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const ExampleContainer = () => {
    const {view} = useSelector(s => s.question);
    const {examples, singleExample, type } = view;
    return(<>

        <Card>
            <Card.Body>
                <h5 className="card-title">Example</h5>
                {type === "1" ? <Multi data={examples}/>: <Single single={singleExample}/> }
            </Card.Body>
        </Card>
    </>);
}
export default ExampleContainer;