import React, { useState } from 'react'

import { Row,  Col} from 'react-bootstrap';
import ImageViewer from "../../../../components/ImageViewer";
import { useSelector, useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import {guideListAction, changeField } from "../../../../../store/modules/question";
import config from "../../../../../config";
const MapContainer = () => {

    const dispatch = useDispatch();
    const {guideList} = useSelector(state=> state.question);
    const [image , setimage] = useState(null);
    
    useMount(() => {
        dispatch(guideListAction());
    });    
    
    const onChange =e => {
        // image Viewer 셋팅 
        setimage(e.target.value === "" ? null : e.target.value);
        dispatch(
            changeField({
                key : e.target.name,
                value : e.target.value
            })
        );
    }

    return(<>
          <Row>
            <Col>
            <div className="position-relative form-group">
                <select name="mapUrl" id="mapUrl" className="form-control" onChange={onChange}>
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
            <ImageViewer src={image}/>
            </Col>
        </Row>
    
    </>);
}
export default MapContainer;