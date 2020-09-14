import React, { useEffect} from 'react'
import {listAction} from "../../../../../store/modules/video";
import {Row, Col} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Player, BigPlayButton  } from 'video-react';
import {changeFieldForm } from "../../../../../store/modules/question";
import config from "../../../../../config";
const VideoContainer = () => {

    const dispatch = useDispatch();
    const {fileList} = useSelector(state => state.video);
    const viewInfo = useSelector(state => state.question.view);
    
    useEffect(()=>{
        dispatch(listAction());
    },[dispatch])

    const onChange = e => {
        dispatch(changeFieldForm({
            form :"view",
            key : e.target.name,
            value : e.target.value ==="" ? "" : config.videoBase+e.target.value


        }))
    }

    return(<>
        <Row>
            <Col>   
                <div className="position-relative form-group">
                    <select name="video" id="video" className="form-control"
                            onChange={onChange}
                            value={viewInfo.video.replace(config.videoBase,"")}
                                               >
                        <option value="">선택</option>
                        {fileList.map((item,idx)=>
                            <option key={idx} 
                                    value={item}
                            >{item}</option>)}
                    </select>
                </div> 
            </Col>
        </Row>
        <Row>
            <Col>
            <Player src={config.baseURL+ viewInfo.video}>
                <BigPlayButton position="center" />
                </Player>
            </Col>
        </Row>
    
    
    
    
    </>);
}
export default VideoContainer