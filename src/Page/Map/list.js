import React ,{useState, useCallback} from "react"
import {Row, Col, Card} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

import Gallery from "react-photo-gallery";
import Photo from "./photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photos";

import Viewer from "react-viewer";

    const SortablePhoto = SortableElement(item => <Photo {...item} />);

    const SortableGallery = SortableContainer(({ items , onClick}) => {
    
  
    return  <Gallery photos={items}
              onClick={onClick}  
              renderImage={props => <SortablePhoto {...props} />} />
    });


const ListPage = () => {
   const [items, setItems] = useState(photos);
   const [visible , setVisible] = useState(false);

   const showMap = () => {
       setVisible(true);
   }

  const onSortEnd = ({ oldIndex, newIndex }) => {
      console.log(oldIndex)
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const onClick = useCallback((event, { photo, index }) => {
   console.log(photo, index);
  }, []);
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
                              <SortableGallery items={items} onClick={onClick}  onSortEnd={onSortEnd} axis={"xy"} />
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