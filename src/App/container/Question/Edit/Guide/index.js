import React  from 'react'
 
import { Row,  Col} from 'react-bootstrap';
import ImageViewer from "../../../../components/ImageViewer";
import { useSelector, useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import {guideListAction, changeFieldForm } from "../../../../../store/modules/question";

const MapContainer = () => {

    const dispatch = useDispatch();
    const {guideList} = useSelector(state=> state.question);
    const viewInfo  = useSelector(state=> state.question.view);
    
    useMount(() => {
        dispatch(guideListAction());
    });    
    
    const onChange =e => {
        // image Viewer 셋팅 
      
        dispatch(
            changeFieldForm({
                form : "view",
                key : e.target.name,
                value : e.target.value
            })
        );
    }

    return(<>
          <Row>
            <Col>
            <div className="position-relative form-group">
                <select name="guide" id="guide" className="form-control" onChange={onChange} value={viewInfo.guide}>
                    <option value="">선택</option>
                    {guideList.map((item, idx)=>
                    <option 
                        key={idx} 
                        value={item.url}
                    >    
                        {item.original_name}
                    </option>
                    )}
                </select>
            </div>
            </Col>
                
        </Row>
        <Row className="questionViewer">
            <Col>
            <ImageViewer src={viewInfo.guide}/>
            </Col>
        </Row>
    
    </>);
}
export default MapContainer;