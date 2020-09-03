import React  from 'react'
 
import { Row,  Col} from 'react-bootstrap';
import ImageViewer from "../../../../components/ImageViewer";
import { useSelector, useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import {guideListAction, changeFieldForm } from "../../../../../store/modules/question";
import config from "../../../../../config";
const MapContainer = () => {

    const dispatch = useDispatch();
    const {guideList} = useSelector(state=> state.question);
    const newInfo  = useSelector(state=> state.question.new);
    
    useMount(() => {
        dispatch(guideListAction());
    });    
    
    const onChange =e => {
        // image Viewer 셋팅 
      
        dispatch(
            changeFieldForm({
                form : "new",
                key : e.target.name,
                value : e.target.value
            })
        );
    }

    return(<>
          <Row>
            <Col>
            <div className="position-relative form-group">
                <select name="guide" id="guide" className="form-control" onChange={onChange}>
                    <option value="">선택</option>
                    {guideList.map((item, idx)=>
                    <option key={idx} value={config.baseURL+item.url}>{item.original_name}</option>
                    )}
                </select>
            </div>
            </Col>
                
        </Row>
        <Row className="questionViewer">
            <Col>
            <ImageViewer src={newInfo.guide}/>
            </Col>
        </Row>
    
    </>);
}
export default MapContainer;