import React from "react"
import {Row, Col, Card} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import ImageUploader from "../../App/layout/Map/Uploader";
import MapList from "../../App/layout/Map/List";

const ListPage = () => {
  
    return(<>
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Table</Card.Title>
                                <span className="d-block m-t-5">마우스 오버시 <code>파일명</code>을 확인할 수 있습니다.</span>
                            </Card.Header>
                            <Card.Body>
                              <ImageUploader/>
                              <MapList/>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Aux>
            
        


    </>);

}
export default ListPage;