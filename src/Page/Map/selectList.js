import React ,{useState, useCallback} from "react"
import {Row, Col, Card} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

import Gallery from "react-photo-gallery";
import Photo from "./photo";
import arrayMove from "array-move";
import SelectedImage from "./selectedImage";
import { photos } from "./photos";

import Viewer from "react-viewer";

  

const ListPage = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [visible , setVisible] = useState(false);

    const showMap = () => {
        setVisible(true);
    }
    const toggleSelectAll = () => {
      setSelectAll(!selectAll);
    };
  
    const onClick= ()=>{
        showMap()
    }
    const imageRenderer = useCallback(
      ({ index, left, top, key, photo }) => (
        <SelectedImage
          selected={selectAll ? true : false}
          key={key}
          margin={"2px"}
          index={index}
          photo={photo}
          left={left}
          top={top}
        />
      ),
      [selectAll]
    );
    return(<>

            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                            <Gallery photos={photos} onClick={onClick}/>
    
                              <Viewer
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