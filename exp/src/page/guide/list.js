import React from 'react'
import Title from "../../App/container/Guide/Title";
import Uploader from "../../App/container/Guide/Uploader";
import ImageList from "../../App/container/Guide/List";
import {Card} from 'react-bootstrap';

const GuidePage = () => {

    return(<>
          <Title/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">가이드관리</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Uploader/>
                    <ImageList/>
                </Card.Body>
            </Card>
    </>);
}
export default GuidePage;