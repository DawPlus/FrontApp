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
    const newInfo = useSelector(state => state.question.new);
    

    useEffect(()=>{
        
        dispatch(listAction());

    },[dispatch])

    const onChange = e => {
        dispatch(changeFieldForm({
            form :"new",
            key : e.target.name,
            value : config.videoBase+e.target.value


        }))
    }

    return(<>
        <Row>
            <Col>   
                <div className="position-relative form-group">
                    <select name="video" id="video" className="form-control"
                            onChange={onChange}
                    >
                        <option>선택</option>
                        {fileList.map((item,idx)=><option key={idx}>{item}</option>)}
                    </select>
                </div> 
            </Col>
        </Row>
        <Row>
            <Col>
            <Player src={config.baseURL+ newInfo.video}>
                <BigPlayButton position="center" />
                </Player>
            </Col>
        </Row>
    
    
    
    
    </>);
}
export default VideoContainer