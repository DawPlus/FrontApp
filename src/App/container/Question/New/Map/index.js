import React from 'react'

import { Row,  Col} from 'react-bootstrap';
import ImageViewer from "../../../../components/ImageViewer";
import { useSelector, useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import {mapListAction, changeFieldForm } from "../../../../../store/modules/question";

const MapContainer = () => {

    const dispatch = useDispatch();
    const {mapList} = useSelector(state=> state.question);
    const newInfo = useSelector(state=> state.question.new);
    
    
    
    useMount(() => {
        dispatch(mapListAction());
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
                <select name="map" id="map" className="form-control" onChange={onChange}>
                    <option value="">선택</option>
                    {mapList.map((item, idx)=>
                    <option key={idx} value={item.url}>{item.original_name}</option>
                    )}
                </select>
            </div>
            </Col>
                
        </Row>
        <Row className="questionViewer" id="guideViewer">
            <Col>
            <ImageViewer src={newInfo.map} />
            </Col>
        </Row>
    
    </>);
}
export default MapContainer;