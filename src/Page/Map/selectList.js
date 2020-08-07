import React ,{useState, useCallback } from "react"
import {Row, Col, Card} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

import Gallery from "react-photo-gallery";
import ImageUploader from "../../App/components/imageUploader"
import SelectedImage from "./imgBtn"
import { photos } from "./photos";

import Viewer from "react-viewer";

  

const ListPage = () => {
  
    const [visible , setVisible] = useState(false);
    const [imageIdx, setImageIdx] = useState(0);
  
    const onClicks= useCallback((event, {photo, index} ) => {
        setVisible(true);
        setImageIdx(index);
       });

       const imageRenderer = useCallback(
        ({ index, left, top, key, photo , onClick}) => (
          <SelectedImage
            key={key}
            margin={"2px"}
            index={index}
            photo={photo}
            left={left}
            top={top}
            onClick={onClick}
          />
        )
      );
    
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
                            <Gallery photos={photos} onClick={onClicks} renderImage={imageRenderer} />
                              <Viewer
                                    activeIndex={imageIdx}
                                    noImgDetails={true}
                                    noNavbar={true}
                                    visible={visible}
                                    onClose={()=>{setVisible(false)} }
                                    images={photos}
                                />
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Aux>
            
        


    </>);

}
export default ListPage;